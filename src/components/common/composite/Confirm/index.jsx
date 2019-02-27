import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Button from 'components/common/base/Button';
import Modal from 'components/common/base/Modal';

const propTypes = exact({
  buttonCancel: PropTypes.string,
  buttonConfirm: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string
});

const defaultProps = {
  buttonCancel: 'Cancel',
  isLoading: false,
  type: 'danger'
};

function Confirm({
  buttonCancel,
  buttonConfirm,
  children,
  isLoading,
  isOpen,
  onClose,
  onConfirm,
  title,
  type
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header onClose={onClose}>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button isLoading={isLoading} onClick={onClose}>
          {buttonCancel}
        </Button>
        <Button
          isLoading={isLoading}
          look={type}
          onClick={onConfirm}
          spinner={isLoading}
        >
          {buttonConfirm}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;

export default Confirm;
