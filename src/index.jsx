import React from 'react';
import ReactDOM from 'react-dom';

// Entry point component
import App from './components/App';

// Utilities
import * as serviceWorker from './serviceWorker';

// Render React element into the DOM
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
