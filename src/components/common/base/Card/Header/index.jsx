import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Header({ children }) {
  return <div className="card-header">{children}</div>;
}

Header.propTypes = propTypes;

export default Header;
