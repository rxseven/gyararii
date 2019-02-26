import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { ThreeBounce } from 'better-react-spinkit';

const propTypes = exact({
  color: PropTypes.string,
  size: PropTypes.number
});

const defaultProps = {
  color: '#999',
  size: 7
};

const options = {
  duration: '1.25s',
  gutter: 5
};

function Spinner(props) {
  return <ThreeBounce {...options} {...props} />;
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
