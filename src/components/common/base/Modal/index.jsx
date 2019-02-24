import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import './Modal.styles.scss';

// Hide the application from screenreaders and other assistive technologies
if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

const propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

function Modal({ children, onClose, ...props }) {
  return (
    <ReactModal
      {...props}
      bodyOpenClassName="modal-open"
      className="modal-dialog"
      onRequestClose={onClose}
      overlayClassName="modal"
    >
      <div className="modal-content">{children}</div>
    </ReactModal>
  );
}

Modal.propTypes = propTypes;

export default Modal;
