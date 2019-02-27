import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  margin: -2rem;
`;

function Wrapper({ children }) {
  return <Frame>{children}</Frame>;
}

export default Wrapper;
