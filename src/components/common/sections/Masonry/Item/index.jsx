/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { isMobile } from 'react-device-detect';

import Card from 'components/common/base/Card';
import Icon from 'components/common/base/Icon';
import Spinner from 'components/common/base/Spinner';

const styles = {
  icon: css`
    color: #fff;
    cursor: pointer;
    display: ${props => (props['data-visibility'] ? 'block' : 'none')};
    font-size: ${props => (props['data-mobile'] ? '1.5rem' : '1rem')};
    position: absolute;
  `
};

const Frame = styled.div`
  border-bottom-left-radius: ${({ theme }) => theme.border.radius};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.15s linear;
  transition-delay: 0.05s;

  :hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

const Link = styled.a`
  ${styles.icon}
  color: ${props => (props['data-mobile'] ? '#666' : '#fff')};
  display: none;
  left: ${props => (props['data-mobile'] ? '42px' : '32px')};
  opacity: ${props => (props['data-mobile'] ? 0.5 : 1)};
  top: 2px;

  /* stylelint-disable-next-line */
  ${Frame}:hover & {
    display: ${props => (props['data-mobile'] ? 'none' : 'block')};
    opacity: 0.5;

    :hover {
      color: #fff;
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  align-items: center;
  background-color: ${({ isLoading }) =>
    isLoading ? 'rgba(0,0,0,0.3)' : 'transparent'};
  bottom: 0;
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Select = styled(Icon)`
  ${styles.icon}
  color: ${props =>
    props['data-checked'] ? '#ff620c' : props['data-mobile'] ? '#666' : '#fff'};
  display: ${props =>
    props['data-checked'] || props['data-mobile'] ? 'block' : 'none'};
  left: 7px;
  opacity: ${props => (props['data-mobile'] ? 0.5 : 1)};
  top: 7px;

  /* stylelint-disable-next-line */
  ${Frame}:hover & {
    display: block;
    opacity: ${props => (props['data-checked'] ? '1' : '0.5')};

    :hover {
      color: ${props => (props['data-checked'] ? '#ff620c' : '#fff')};
      opacity: 1;
    }
  }
`;

const Shadow = styled.div`
  box-shadow: inset 0px 85px 95px -50px rgba(0, 0, 0, 0.65);
  border-top-left-radius: ${({ theme }) => theme.border.radius};
  border-top-right-radius: ${({ theme }) => theme.border.radius};
  display: none;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  /* stylelint-disable-next-line */
  ${Frame}:hover & {
    display: ${({ mobile }) => (mobile ? 'none' : 'block')};
  }
`;

const Thumbnail = styled(Card)`
  &&& {
    border: ${props =>
      props['data-visibility'] ? '1px solid rgba(0, 0, 0, 0.125)' : 'none'};
    position: ${props => (props['data-visibility'] ? 'static' : 'absolute')};
    visibility: ${props => (props['data-visibility'] ? 'visible' : 'hidden')};
    z-index: -999;
  }
`;

const propTypes = exact({
  image: PropTypes.shape({
    public_id: PropTypes.string.isRequired,
    secure_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
  onLoaded: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  toDelete: PropTypes.bool
});

const defaultProps = {
  isLoading: false,
  isSelected: false,
  toDelete: false
};

function Item(props) {
  const [visibility, setVisible] = useState(false);
  const {
    image: { public_id: publicId, secure_url: https, url },
    index,
    onLoaded,
    isLoading,
    onPreview,
    onSelect,
    isSelected,
    toDelete
  } = props;

  function handleLoaded() {
    onLoaded();
    setVisible(true);
  }

  function handleSelect(event) {
    event.stopPropagation();
    onSelect(publicId);
  }

  function handleOpenLink(event) {
    event.stopPropagation();
  }

  function handleOpenLightbox() {
    onPreview(index);
  }

  return (
    <Thumbnail data-visibility={visibility}>
      <Frame data-testid="frame" onClick={handleOpenLightbox}>
        <Card.Image src={https} onLoad={handleLoaded} />
        <Shadow mobile={isMobile} />
        <Select
          data-checked={isSelected}
          data-mobile={isMobile}
          data-testid="select"
          icon={toDelete ? 'trash-alt' : 'check-circle'}
          onClick={handleSelect}
        />
        <Link
          data-mobile={isMobile}
          href={url}
          onClick={handleOpenLink}
          target="_blank"
          title="Open image in new tab"
        >
          <Icon icon="external-link-alt" />
        </Link>
        <Overlay data-testid="overlay" isLoading={isLoading && isSelected}>
          <Spinner color="#fff" />
        </Overlay>
      </Frame>
    </Thumbnail>
  );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
