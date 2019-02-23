import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const initialState = {};
const Context = React.createContext({});

const propTypes = exact({
  children: PropTypes.element.isRequired
});

class Global extends React.Component {
  state = { ...initialState };

  render() {
    const { children } = this.props;
    const actions = {};
    const { state } = this;

    return (
      <Context.Provider value={{ actions, state }}>{children}</Context.Provider>
    );
  }
}

Global.propTypes = propTypes;

export { Context };
export default Global;
