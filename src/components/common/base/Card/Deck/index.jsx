import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Deck({ children }) {
  return <div className="card-deck">{children}</div>;
}

Deck.propTypes = propTypes;

export default Deck;
