import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  replace: PropTypes.bool
};

const defaultProps = {
  rel: 'noopener noreferrer',
  replace: false
};

function Hyperlink({ children, replace, ...props }) {
  return (
    <a {...props} target={replace ? '_self' : '_blank'}>
      {children}
    </a>
  );
}

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;

export default Hyperlink;
