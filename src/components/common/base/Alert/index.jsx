import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired
});

function Alert({ children, onDismiss }) {
  function handleDismiss() {
    onDismiss(children);
  }

  return (
    <div className="alert alert-danger">
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

export default Alert;
