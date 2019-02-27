import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled(Link)`
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0;
  padding: 0;
  transition: color 0.2s ease-in-out;

  &,
  :hover {
    color: ${({ theme }) => theme.color.dark};
  }

  :hover {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }
`;

function Brand() {
  return (
    <Logo title="Gallery" to="/">
      ギャラリー
    </Logo>
  );
}

export default Brand;
