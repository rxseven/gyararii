import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
});

function Header({ children, onClose }) {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{children}</h5>
      <button
        aria-label="Close"
        className="close"
        onClick={onClose}
        type="button"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

Header.propTypes = propTypes;

export default Header;
