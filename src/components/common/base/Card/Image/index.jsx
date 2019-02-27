import PropTypes from 'prop-types';
import React from 'react';
import Img from 'react-image';

const propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired
};

const defaultProps = {
  alt: ''
};

function Image({ className, ...props }) {
  return <Img {...props} className={`card-img ${className}`} />;
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
