/* eslint-disable react/no-unused-state */
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const initialState = {
  cursor: null,
  images: [],
  isMenu: false,
  isModal: false
};
const Context = React.createContext({});

const propTypes = exact({
  children: PropTypes.element.isRequired
});

class Global extends React.Component {
  state = { ...initialState };

  handleGalleryChange = state => {
    this.setState(state);
  };

  handleMenuChange = state => {
    this.setState({ isMenu: state.isOpen });
  };

  handleMenuClose = () => {
    this.setState({ isMenu: false });
  };

  handleMenuToggle = () => {
    this.setState(state => ({ isMenu: !state.isMenu }));
  };

  handleModalClose = () => {
    this.setState({ isModal: false });
  };

  handleModalOpen = () => {
    this.setState({ isModal: true });
  };

  render() {
    const { children } = this.props;
    const actions = {
      gallery: {
        onChange: this.handleGalleryChange
      },
      menu: {
        onChange: this.handleMenuChange,
        onClose: this.handleMenuClose,
        onToggle: this.handleMenuToggle
      },
      modal: {
        onClose: this.handleModalClose,
        onOpen: this.handleModalOpen
      }
    };
    const { state } = this;

    return (
      <Context.Provider value={{ actions, state }}>{children}</Context.Provider>
    );
  }
}

Global.propTypes = propTypes;

export { Context };
export default Global;
