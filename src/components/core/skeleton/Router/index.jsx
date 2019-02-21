import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

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

export default Router;
