import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
});

class Header extends React.Component {
  handleClose = () => {
    const { onClose } = this.props;

    onClose();
  };

  render() {
    const { children } = this.props;

    return (
      <div className="modal-header">
        <h5 className="modal-title">{children}</h5>
        <button
          aria-label="Close"
          className="close"
          onClick={this.handleClose}
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
