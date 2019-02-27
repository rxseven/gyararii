import React from 'react';
import ScrollToTop from 'react-scroll-up';
import styled from 'styled-components';

import Icon from 'components/common/base/Icon';

const Arrow = styled(Icon)`
  color: rgba(0, 0, 0, 0.35);
  font-size: 1.35rem;
  transition: color 0.2s ease-in-out;

  :hover {
    color: rgba(0, 0, 0, 0.65);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.15rem;

    :hover {
      color: rgba(0, 0, 0, 0.75);
    }
  }
`;

const Frame = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border: rgba(0, 0, 0, 0.25) solid 1px;
  border-radius: 50%;
  bottom: 1rem;
  display: flex;
  height: 35px;
  justify-content: center;
  margin-right: ${() => parseFloat(-35 / 2)}px;
  position: fixed;
  right: 50%;
  transition: border-color 0.2s ease-in-out;
  width: 35px;
  z-index: 1;

  :hover {
    border-color: rgba(0, 0, 0, 0.4);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.35);
    height: 30px;
    margin-right: 0;
    right: 1.5rem;
    width: 30px;

    :hover {
      border-color: rgba(0, 0, 0, 0.5);
    }
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
      <Frame>
        <Arrow icon="arrow-up" />
      </Frame>
    </ScrollToTop>
  );
}

export default Jumper;
