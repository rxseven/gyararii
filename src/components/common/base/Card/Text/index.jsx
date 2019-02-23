import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Text({ children }) {
  return <p className="card-text">{children}</p>;
}

Text.propTypes = propTypes;

export default Text;
