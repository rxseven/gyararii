import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

const propTypes = exact({
  children: PropTypes.element.isRequired
});

function Router({ children }) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <ScrollMemory />
        <LastLocationProvider>{children}</LastLocationProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

Router.propTypes = propTypes;

export default Router;
