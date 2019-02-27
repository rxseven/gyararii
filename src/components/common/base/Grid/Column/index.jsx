import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired,
  size: PropTypes.string
});

const defaultProps = {
  size: 'col'
};

function Column({ children, size }) {
  return <div className={size}>{children}</div>;
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
