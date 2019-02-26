import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func.isRequired,
  look: PropTypes.string
});

const defaultProps = {
  look: 'danger'
};

function Alert({ children, onDismiss, look }) {
  function handleDismiss() {
    onDismiss(children);
  }

  return (
    <div className={cx('alert', `alert-${look}`)}>
      {children}
      <button
        aria-label="Close"
        className="close"
        onClick={handleDismiss}
        type="button"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
