import React from 'react';
import styled from 'styled-components';

import Confirm from 'components/common/composite/Confirm';
import Control from 'components/common/sections/Control';
import Error from 'components/common/composite/Error';
import File from 'components/common/composite/File';
import Lightbox from 'components/common/base/Lightbox';
import Masonry from 'components/common/sections/Masonry';
import Pagination from 'components/common/composite/Pagination';
import Toolbar from 'components/common/sections/Toolbar';

const Frame = styled.div`
  margin-top: ${({ isLoading }) => (isLoading ? '-1.5rem' : '36px')};
`;

function View(props) {
  const {
    action,
    currentImage,
    error,
    images,
    isDeleting,
    isFetching,
    isLightbox,
    isModal,
    isPreloading,
    isRestoring,
    isUploading,
    onDeleteCancel,
    onDeleteConfirm,
    onDeleteRequest,
    onDeselect,
    onDismiss,
    onLightboxClose,
    onLightboxNext,
    onLightboxOpen,
    onLightboxPrev,
    onLoad,
    onLoaded,
    onScrollTop,
    onSelect,
    onSelectAll,
    onUpload,
    pagination,
    selected,
    status
  } = props;
  const errorLength = error.length;
  const imageLength = images.length;
  const isLoading = isDeleting || isFetching || isUploading;
  const isMore = !!pagination;
  const isPrefetching =
    (isFetching && isPreloading) || (isRestoring && !imageLength);

  return (
    <Frame isLoading={isPrefetching}>
      <Toolbar isLoading={isPrefetching}>
        <File
          data-place="right"
          data-tip="Please DO NOT upload inappropriate images."
          icon="cloud-upload-alt"
          id="gallery"
          isLoading={isLoading}
          multiple
          onUpload={onUpload}
          spinner={isUploading}
        >
          Upload
        </File>
        <Control
          error={error}
          images={images}
          isLoading={isLoading}
          onDeleteRequest={onDeleteRequest}
          onDeselect={onDeselect}
          onError={onScrollTop}
          onSelectAll={onSelectAll}
          selected={selected}
          status={status}
        />
      </Toolbar>
      <Error error={error} onDismiss={onDismiss} />
      <Masonry
        isDeleting={isDeleting}
        error={errorLength}
        isFetching={isFetching}
        isMore={isMore}
        images={images}
        onPreview={onLightboxOpen}
        onLoaded={onLoaded}
        onSelect={onSelect}
        selected={selected}
        toDelete={action === 'delete'}
      />
      <Pagination
        isLoading={isFetching}
        isMore={!!imageLength && isMore}
        onLoad={onLoad}
      >
        More images
      </Pagination>
      <Confirm
        buttonConfirm="Delete"
        isOpen={isModal}
        isLoading={isDeleting}
        onClose={onDeleteCancel}
        onConfirm={onDeleteConfirm}
        title="Permanently Delete Images"
        type="danger"
      >
        <p>
          This action is permanent. Are you sure you don’t want to reconsider?
        </p>
      </Confirm>
      <Lightbox
        currentImage={currentImage}
        images={images.map(image => ({ src: image.secure_url }))}
        isOpen={isLightbox}
        onClickNext={onLightboxNext}
        onClickPrev={onLightboxPrev}
        onClose={onLightboxClose}
      />
    </Frame>
  );
}

export default View;
