import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Router from './Router';
import Theme from './Theme';

const propTypes = exact({
  children: PropTypes.element.isRequired
});

function Providers({ children }) {
  return (
    <Router>
      <Theme>{children}</Theme>
    </Router>
  );
}

Providers.propTypes = propTypes;

export default Providers;
