import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  align-items: center;
  display: flex;

  > :not(:last-child) {
    margin-right: 0.25rem;
  }

  > :not(:first-child) {
    margin-left: 0.25rem;
  }
`;

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Set({ children }) {
  return <Frame>{children}</Frame>;
}

Set.propTypes = propTypes;

export default Set;
