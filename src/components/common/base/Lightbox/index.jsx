import PropTypes from 'prop-types';
import React from 'react';
import ReactImages from 'react-images';

const propTypes = {
  currentImage: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.any).isRequired,
  isOpen: PropTypes.bool,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

const defaultProps = {
  isOpen: false
};

const options = {
  backdropClosesModal: true
};

function Lightbox(props) {
  return <ReactImages {...props} {...options} />;
}

Lightbox.propTypes = propTypes;
Lightbox.defaultProps = defaultProps;

export default Lightbox;
