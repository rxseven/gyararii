import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.propTypes = propTypes;

export default Container;
