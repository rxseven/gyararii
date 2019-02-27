import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  alignment: PropTypes.string,
  children: PropTypes.node.isRequired
});

const defaultProps = {
  alignment: ''
};

function Row({ alignment, children }) {
  return <div className={cx('row', !!alignment && alignment)}>{children}</div>;
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
