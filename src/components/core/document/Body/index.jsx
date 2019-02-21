import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import styled from 'styled-components';

import HTML from 'constants/elements/html';

const Frame = styled.div.attrs({ id: HTML.body })`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;
`;

const propTypes = exact({
  children: PropTypes.element.isRequired
});

function Body({ children }) {
  return <Frame>{children}</Frame>;
}

Body.propTypes = propTypes;

export default Body;
