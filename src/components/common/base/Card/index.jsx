import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Body from './Body';
import Deck from './Deck';
import Columns from './Columns';
import Footer from './Footer';
import Header from './Header';
import Image from './Image';
import Text from './Text';
import Title from './Title';

const propTypes = {
  alignment: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  end: PropTypes.bool,
  margin: PropTypes.string
};

const defaultProps = {
  alignment: 'left',
  background: '',
  className: '',
  color: '',
  end: false,
  margin: '3'
};

function Card({
  alignment,
  background,
  children,
  className,
  color,
  end,
  margin
}) {
  return (
    <div
      className={cx(
        'card',
        className,
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

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

Card.Body = Body;
Card.Columns = Columns;
Card.Deck = Deck;
Card.Footer = Footer;
Card.Header = Header;
Card.Image = Image;
Card.Text = Text;
Card.Title = Title;

export default Card;
