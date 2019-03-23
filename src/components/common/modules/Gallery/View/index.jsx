import React, { useState } from 'react';
import { isMobile, isMobileOnly } from 'react-device-detect';
import styled from 'styled-components';

import Button from 'components/common/base/Button';
import Confirm from 'components/common/composite/Confirm';
import Toggle from 'components/common/composite/Toggle';
import Control from 'components/common/sections/Control';
import Error from 'components/common/composite/Error';
import File from 'components/common/composite/File';
import Lightbox from 'components/common/base/Lightbox';
import Jumper from 'components/common/base/Jumper';
import Masonry from 'components/common/sections/Masonry';
import Pagination from 'components/common/composite/Pagination';
import Toolbar from 'components/common/sections/Toolbar';

const Actions = styled.div`
  align-items: center;
  display: ${props => (props['data-visibility'] ? 'flex' : 'none')};
`;

const Autoscroll = styled.div`
  display: ${props => (props['data-visibility'] ? 'block' : 'none')};
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ narrow }) => (narrow ? 'flex-end' : 'space-between')};
`;

const Frame = styled.div`
  margin-top: ${({ isLoading }) => (isLoading ? '-1.5rem' : '36px')};
`;

function View(props) {
  const [isSelecting, setSelecting] = useState(false);
  const {
    action,
    autoscroll,
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
    onAutoscroll,
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
  const selectedLength = selected.length;
  const isLoading = isDeleting || isFetching || isUploading;
  const isMore = !!pagination;
  const isPrefetching =
    (isFetching && isPreloading) || (isRestoring && !imageLength);

  function handleSelecting() {
    setSelecting(!isSelecting);
  }

  return (
    <Frame isLoading={isPrefetching}>
      <Toolbar isLoading={isPrefetching}>
        <Content narrow={!!selectedLength}>
          <Actions data-visibility={!selectedLength}>
            <Button.Set>
              <File
                data-place="right"
                data-tip="Please DO NOT upload inappropriate images."
                data-tip-disable={isMobile}
                icon="cloud-upload-alt"
                id="gallery"
                isLoading={isLoading}
                multiple
                onUpload={onUpload}
                spinner={isUploading}
              >
                Upload
              </File>
              <If condition={isMobile}>
                <Button
                  icon="check"
                  isLoading={isLoading}
                  look={isSelecting ? 'primary' : 'secondary'}
                  onClick={handleSelecting}
                >
                  Tick
                </Button>
              </If>
              <Autoscroll data-visibility={!isMobileOnly}>
                <Toggle
                  checked={autoscroll}
                  isLoading={isLoading}
                  onToggle={onAutoscroll}
                >
                  Auto scroll
                </Toggle>
              </Autoscroll>
            </Button.Set>
          </Actions>
        </Content>
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
        isSelecting={isSelecting}
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
      <Jumper />
    </Frame>
  );
}

export default View;
