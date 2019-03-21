import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import styled from 'styled-components';

import Icon from 'components/common/base/Icon';

const Frame = styled.span`
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.dark};
  display: flex;
  font-size: 1.1rem;
  font-weight: 300;
  height: 2.25rem;
  justify-content: center;
  transition: all 0.15s ease-in-out;
  width: 2.25rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.color.primary};
  }
`;

const propTypes = exact({
  className: PropTypes.string,
  onToggle: PropTypes.func.isRequired
});

const defaultProps = {
  className: ''
};

function Burger({ className, onToggle }) {
  return (
    <Frame className={className} onClick={onToggle} title="Open menu">
      <Icon icon="bars" />
    </Frame>
  );
}

Burger.propTypes = propTypes;
Burger.defaultProps = defaultProps;

export default Burger;
