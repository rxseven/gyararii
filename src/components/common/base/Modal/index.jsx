import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import './Modal.styles.scss';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

// Hide the application from screenreaders and other assistive technologies
if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

const propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const options = {
  bodyOpenClassName: 'modal-open',
  className: 'modal-dialog',
  overlayClassName: 'modal'
};

function Modal({ children, ...props }) {
  return (
    <ReactModal {...options} {...props}>
      <div className="modal-content">{children}</div>
    </ReactModal>
  );
}

Modal.propTypes = propTypes;

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;

export default Modal;
