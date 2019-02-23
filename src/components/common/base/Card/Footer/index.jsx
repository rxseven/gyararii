import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Footer({ children }) {
  return <div className="card-footer text-muted">{children}</div>;
}

Footer.propTypes = propTypes;

export default Footer;
