import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { Helmet } from 'react-helmet';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Head({ children }) {
  return <Helmet>{children}</Helmet>;
}

Head.propTypes = propTypes;

export default Head;
