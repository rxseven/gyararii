import React from 'react';
import ReactDOM from 'react-dom';

// Constants
import HTML from 'constants/elements/html';

// Entry point component
import App from 'components/App';

// Utilities
import * as serviceWorker from 'serviceWorker';

// Get root HTML element with the specified ID
const root = document.getElementById(HTML.root);

// Validate root element
if (root == null) {
  throw new Error('No root element found');
}

// Render React element into the DOM
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
