import React from 'react';
import { hot } from 'react-hot-loader';

import { Routes, Router } from 'components/core';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default hot(module)(App);
