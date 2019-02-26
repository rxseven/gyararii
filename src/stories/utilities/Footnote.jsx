import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  bottom: 2rem;
  font-size: 14px;
  position: fixed;
`;

function Footnote({ children }) {
  return <Frame>{children}</Frame>;
}

export default Footnote;
