import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Columns({ children }) {
  return <div className="card-columns">{children}</div>;
}

Columns.propTypes = propTypes;

export default Columns;
