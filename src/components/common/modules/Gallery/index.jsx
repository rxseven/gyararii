import { has } from 'lodash';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { isBrowser } from 'react-device-detect';

import withContext from 'HOCs/withContext';

import { isTruthy } from 'helpers/boolean';
import { pluralWord } from 'helpers/string';
import toast from 'helpers/toast';
import * as galelryService from 'services/gallery';

import View from './View';

const MODE = {
  pagination: 'pagination',
  preload: 'preload',
  refill: 'refill'
};

const STATE = {
  ajax: {
    action: null,
    error: [],
    isDeleting: false,
    isFetching: false,
    isPreloading: false,
    isRestoring: false,
    isUploading: false
  },
  gallery: {
    autoscroll: false,
    loaded: false,
    next: 0,
    pagination: null,
    selected: []
  },
  lightbox: {
    currentImage: 0,
    isLightbox: false
  },
  ui: {
    status: null
  }
};

const STATUS_TIMEOUT = 3000;
const UPLOAD_LIMIT_SIZE = 300 * 1000;
const UPLOAD_LIMIT_NUMBER = 10;

class Gallery extends React.Component {
  state = {
    ...STATE.ajax,
    ...STATE.gallery,
    ...STATE.lightbox,
    ...STATE.ui
  };

  isMounting = false;

  loadedImages = 0;

  componentDidMount() {
    const { context } = this.props;
    const { images } = context.state;
    const imagesLength = images.length;

    // Update mounting state
    this.isMounting = true;

    // Fetch images (pleload mode) if the gallery is empty
    if (imagesLength < 1) {
      this.fetchImages({ mode: MODE.preload });
    } else {
      this.setState({ next: imagesLength });
    }
  }

  componentWillUnmount() {
    // Update mounting state
    this.isMounting = false;
  }

  // Update state
  updateState = (updater, callback = null) => {
    if (this.isMounting) {
      this.setState(updater, callback);
    }
  };

  // Delete images
  deleteImages = () => {
    const { context } = this.props;
    const { selected } = this.state;
    const { actions, state } = context;
    const { cursor, images } = state;

    const successHandler = () => {
      // Close a confirmation modal
      actions.modal.onClose();

      // Remove deleted images from the state and reset selected list
      const remaining = images.filter(
        image => !selected.includes(image.public_id)
      );
      const isRefill = cursor && remaining.length < 10;
      const isRestoring = cursor && isTruthy(remaining.length, 0);

      // Update state and status message once the HTTP request finished
      this.handleAjaxSuccess({
        callback: () => {
          // Fetch more images after the previous status message has shown
          if (isRefill) {
            setTimeout(() => {
              this.fetchImages({
                max: selected.length,
                mode: MODE.refill
              });
            }, STATUS_TIMEOUT - (isRestoring ? 0 : 1500));
          }
        },
        gallery: { images: remaining, cursor },
        state: { isRestoring },
        status: `Deleted ${selected.length} ${pluralWord(
          selected.length,
          'image'
        )} successfully`,
        timeout: !isRefill
      });
    };

    const errorHandler = error => {
      // Handle failure HTTP request
      this.handleAjaxError({
        callback: () => {
          // Close modal
          actions.modal.onClose();
        },
        error
      });
    };

    // Update state and status message once the HTTP request starts
    this.handleAjaxStart({ state: { action: 'delete', isDeleting: true } });

    // Remove images on the cloud
    galelryService.deleteImages(selected, successHandler, errorHandler);
  };

  // Fetch images
  fetchImages = (options = { max: null, mode: null }) => {
    const { context } = this.props;
    const { isRestoring } = this.state;
    const { state } = context;
    const { cursor } = state;
    const isMore = isTruthy(options.mode, MODE.pagination);
    const isPreloading = isTruthy(options.mode, MODE.preload);
    const isRefill = isTruthy(options.mode, MODE.refill);
    const request = {
      params: {
        max_results: options.max,
        next_cursor: cursor || null
      }
    };
    let status;

    // Arrange status messages
    switch (true) {
      case isRefill:
        status = 'Updating the gallery...';
        break;
      case isMore:
        status = 'Loading images...';
        break;
      default:
        status = null;
    }

    const successHandler = response => {
      const { images: current } = state;

      // Retrieve data in a response and transform to an appropriate format
      const { data } = response;
      const images = data.resources;

      // Update state and status message once the HTTP request finished
      this.handleAjaxSuccess({
        gallery: {
          cursor: has(data, 'next_cursor') ? data.next_cursor : null,
          images: [...current, ...images]
        },
        state: {
          next: images.length || 0
        },
        status: isMore
          ? `Retrived ${images.length} ${pluralWord(images.length, 'image')}`
          : null
      });
    };

    const errorHandler = error => {
      // Handle failure HTTP request
      this.handleAjaxError({ error, notification: !isPreloading });
    };

    // Clear a selection
    this.handleDeselect();

    // Update state and status message once the HTTP request starts
    this.handleAjaxStart({
      state: {
        isFetching: true,
        isPreloading,
        isRestoring
      },
      status
    });

    // Fetch images from the cloud
    galelryService.fetchImages(request, successHandler, errorHandler);
  };

  // Upload images
  uploadImages = request => {
    const { context } = this.props;
    const { cursor, images: current } = context.state;

    const successHandler = response => {
      // Retrieve data in a response and transform to an appropriate format
      const { data } = response;

      // Insert new uploaded images to the beginning of the existing list
      const images = [...data, ...current];

      // Update state and status message once the HTTP request finished
      this.handleAjaxSuccess({
        gallery: { cursor, images },
        status: `Uploaded ${data.length} ${pluralWord(
          data.length,
          'image'
        )} successfully`
      });
    };

    const errorHandler = error => {
      // Handle failure HTTP request
      this.handleAjaxError({ error });
    };

    // Update state and status message once the HTTP request starts
    this.handleAjaxStart({
      state: { isUploading: true },
      status: 'Uploading images...'
    });

    // Upload images to the cloud
    galelryService.uploadImages(request, successHandler, errorHandler);
  };

  // Handle failure Ajax request
  handleAjaxError = ({ callback = null, error, notification = true }) => {
    // Retrieve error in a response and transform to an appropriate format
    const {
      data: { message }
    } = error.response;

    // Show alert message
    this.updateState(
      { ...STATE.ajax, error: [message], status: null },
      callback
    );

    // Show toast
    if (notification) {
      toast({ message });
    }
  };

  // Handle Ajax start
  handleAjaxStart = ({ state = null, status = null }) => {
    this.updateState({
      ...STATE.ajax,
      ...state,
      status
    });
  };

  // Handle successful Ajax request
  handleAjaxSuccess = ({
    callback = null,
    gallery,
    state = null,
    status = null,
    timeout = true
  }) => {
    const { context } = this.props;

    // Update context state
    if (this.isMounting) {
      context.actions.gallery.onChange(gallery);
    }

    this.updateState(
      {
        ...STATE.ajax,
        ...state,
        pagination: gallery.cursor,
        selected: [],
        status
      },
      callback
    );

    // Automatically remove Ajax status
    if (timeout) {
      setTimeout(() => this.updateState({ status: null }), STATUS_TIMEOUT);
    }
  };

  // Cancel deleting images
  handleDeleteCancel = () => {
    const { context } = this.props;

    // Close a confirmation modal and reset action
    context.actions.modal.onClose();
    this.updateState({ action: null });
  };

  // Confirm deleting images
  handleDeleteConfirm = () => {
    this.deleteImages();
  };

  // Request deleting images
  handleDeleteRequest = () => {
    const { context } = this.props;

    // Open a confirmation modal and set action type
    context.actions.modal.onOpen();
    this.updateState({ action: 'delete' });
  };

  // Fetch more images
  handleLoad = () => {
    this.fetchImages({ mode: MODE.pagination });
  };

  // Check loaded images
  handleLoaded = () => {
    const { context } = this.props;
    const { autoscroll, next } = this.state;

    // Increase a number of loaded images by one
    this.loadedImages = this.loadedImages + 1;

    // When all images loaded successfully
    if (next === this.loadedImages) {
      // Reset counter and tracking state
      this.loadedImages = 0;
      this.updateState({ next: 0, loaded: true });

      // Set pagination
      this.setState({ pagination: context.state.cursor });

      // Scroll to the bottom of the page
      if (autoscroll && isBrowser) {
        scroll.scrollToBottom();
      }
    }
  };

  // Upload images
  handleUpload = event => {
    const errors = [];
    const types = ['image/gif', 'image/jpeg', 'image/png'];

    // Get FileList from a form control
    const fileList = event.target.files;

    // Create a new, shallow-copied Array instance from FileList array-like
    const files = Array.from(fileList);

    // Construct a set of key/value pairs representing form fields and their values
    const formData = new FormData();

    // Check limited number of images
    if (files.length > UPLOAD_LIMIT_NUMBER) {
      // Show an error notification and stop the next execution
      return toast({
        message: `Only ${UPLOAD_LIMIT_NUMBER} images can be uploaded at a time`
      });
    }

    // Check invalid input
    files.forEach((file, index) => {
      // Catching wrong file types
      if (types.every(type => file.type !== type)) {
        errors.push(`${file.type} is not a supported format`);
      }

      // Catching files that are too large
      if (file.size > UPLOAD_LIMIT_SIZE) {
        errors.push(`${file.name} is too large, please pick a smaller file`);
      }

      // Append new key/value to a FormData object
      formData.append(index, file);
    });

    // Show an error notification and stop the next execution
    if (errors.length) {
      return errors.forEach(error => {
        toast({ message: error });
      });
    }

    // Upload images
    return this.uploadImages(formData);
  };

  // Auto-scroll mode
  handleAutoscroll = checked => {
    this.setState(state => ({ autoscroll: !state.autoscroll }));
  };

  // Select image
  handleSelect = id => {
    const { selected } = this.state;
    let selection;

    // Arrange a selection
    if (selected.includes(id)) {
      selection = selected.filter(item => item !== id);
    } else {
      selection = [...selected, id];
    }

    // Update selection list
    this.setState({ selected: selection });
  };

  // Select all images
  handleSelectAll = () => {
    const { context } = this.props;
    const { images } = context.state;

    this.setState({
      selected: images.map(image => image.public_id)
    });
  };

  // Deselect images
  handleDeselect = () => {
    this.setState({ selected: [] });
  };

  // Close lightbox
  handleLightboxClose = () => {
    this.setState({ currentImage: 0, isLightbox: false });
  };

  // Open lightbox
  handleLightboxOpen = index => {
    this.setState({ currentImage: index, isLightbox: true });
  };

  // Show previous image
  handleLightboxPrev = () => {
    const { currentImage } = this.state;

    this.setState({
      currentImage: currentImage - 1
    });
  };

  // Show next image
  handleLightboxNext = () => {
    const { currentImage } = this.state;

    this.setState({
      currentImage: currentImage + 1
    });
  };

  // Dismiss alert
  handleDismiss = alert => {
    const { error } = this.state;

    this.setState({ error: error.filter(item => item !== alert) });
  };

  // Scroll top
  handleScrollTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const { context } = this.props;
    const { state } = this;
    const galleryProps = {
      ...state,
      images: context.state.images,
      isModal: context.state.isModal,
      onAutoscroll: this.handleAutoscroll,
      onDeleteCancel: this.handleDeleteCancel,
      onDeleteConfirm: this.handleDeleteConfirm,
      onDeleteRequest: this.handleDeleteRequest,
      onDeselect: this.handleDeselect,
      onDismiss: this.handleDismiss,
      onLightboxClose: this.handleLightboxClose,
      onLightboxNext: this.handleLightboxNext,
      onLightboxOpen: this.handleLightboxOpen,
      onLightboxPrev: this.handleLightboxPrev,
      onLoad: this.handleLoad,
      onLoaded: this.handleLoaded,
      onScrollTop: this.handleScrollTop,
      onSelect: this.handleSelect,
      onSelectAll: this.handleSelectAll,
      onUpload: this.handleUpload,
      pagination: state.pagination
    };

    return <View {...galleryProps} />;
  }
}

// Export modules
export default withContext(Gallery);
