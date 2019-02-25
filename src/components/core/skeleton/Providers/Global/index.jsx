import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const initialState = { isMenu: false };
const Context = React.createContext({});

const propTypes = exact({
  children: PropTypes.element.isRequired
});

class Global extends React.Component {
  state = { ...initialState };

  handleMenuChange = state => {
    this.setState({ isMenu: state.isOpen });
  };

  handleMenuClose = () => {
    this.setState({ isMenu: false });
  };

  handleMenuToggle = () => {
    this.setState(state => ({ isMenu: !state.isMenu }));
  };

  render() {
    const { children } = this.props;
    const actions = {
      menu: {
        onChange: this.handleMenuChange,
        onClose: this.handleMenuClose,
        onToggle: this.handleMenuToggle
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
