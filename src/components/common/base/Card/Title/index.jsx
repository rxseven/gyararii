import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Title({ children }) {
  return <h5 className="card-title">{children}</h5>;
}

Title.propTypes = propTypes;

export default Title;
