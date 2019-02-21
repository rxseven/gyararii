import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import styled from 'styled-components';

import HTML from 'constants/elements/html';

const Frame = styled.div.attrs({ id: HTML.wrapper })`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Wrapper({ children }) {
  return <Frame>{children}</Frame>;
}

Wrapper.propTypes = propTypes;

export default Wrapper;
