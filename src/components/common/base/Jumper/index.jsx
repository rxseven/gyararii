import React from 'react';
import ScrollToTop from 'react-scroll-up';
import styled from 'styled-components';

import Icon from 'components/common/base/Icon';

const Arrow = styled(Icon)`
  bottom: 1rem;
  color: rgba(0, 0, 0, 0.5);
  font-size: 2.25rem;
  margin-right: ${() => parseFloat(-2.25 / 2)}rem;
  position: fixed;
  right: 50%;
  transition: color 0.2s ease-in-out;
  z-index: 1;

  :hover {
    color: ${({ theme }) => theme.color.dark};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    bottom: 1.5rem;
    color: ${({ theme }) => theme.color.secondary};
    font-size: 2rem;
    margin-right: 0;
    right: 1.5rem;
  }
`;

const options = {
  showUnder: 160,
  style: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0
  }
};

function Jumper() {
  return (
    <ScrollToTop {...options}>
      <Arrow icon="arrow-alt-circle-up" />
    </ScrollToTop>
  );
}

export default Jumper;
