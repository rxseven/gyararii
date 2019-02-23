import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Body from './Body';
import Deck from './Deck';
import Columns from './Columns';

const propTypes = exact({
  alignment: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  end: PropTypes.bool,
  margin: PropTypes.string
});

const defaultProps = {
  alignment: 'text-left',
  background: '',
  color: '',
  end: false,
  margin: '3'
};

function Container({ alignment, background, children, color, end, margin }) {
  return (
    <div
      className={cx(
        'card',
        !!alignment && `text-${alignment}`,
        !!background && `bg-${background}`,
        !!color && `text-${color}`,
        !end && `mb-${margin}`
      )}
    >
      {children}
    </div>
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

Container.Body = Body;
Container.Columns = Columns;
Container.Deck = Deck;

export default Container;
