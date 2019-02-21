import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function Router(story) {
  return <BrowserRouter>{story()}</BrowserRouter>;
}

export default Router;
