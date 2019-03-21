import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Body({ children }) {
  return <div>{children}</div>;
}

Body.propTypes = propTypes;

export default Body;
