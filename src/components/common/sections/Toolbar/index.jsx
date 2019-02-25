import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import styled from 'styled-components';

import Grid from 'components/common/base/Grid';

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Frame = styled.div`
  background-color: #fff;
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
  left: 0;
  margin-top: 0.75rem;
  padding-bottom: 0.25rem;
  padding-top: 46px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Shadow = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#ffffff",
      endColorstr="#00ffffff",
      GradientType=0
    );
  height: 0.5rem;
  left: 0;
  margin-top: 0.25rem;
  position: absolute;
  top: 74px;
  width: 100%;
`;

const propTypes = exact({
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  node: PropTypes.any.isRequired
});

const defaultProps = {
  isLoading: false
};

function Toolbar({ children, isLoading, node }) {
  return (
    <Frame isLoading={isLoading} ref={node}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>
            <Content>{children}</Content>
          </Grid.Column>
        </Grid.Row>
        <Shadow />
      </Grid.Container>
    </Frame>
  );
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
