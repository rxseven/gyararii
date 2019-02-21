import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'config/theme';

const propTypes = exact({
  children: PropTypes.element.isRequired
});

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = propTypes;

export default Theme;
