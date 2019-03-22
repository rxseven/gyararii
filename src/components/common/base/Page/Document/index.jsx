import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Document({ children }) {
  return <div>{children}</div>;
}

Document.propTypes = propTypes;

export default Document;
