import React from 'react';
import styled from 'styled-components';

import Grid from 'components/common/base/Grid';

const Frame = styled.header`
  background-color: #fff;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
  left: 0;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

function Header() {
  return (
    <Frame>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>
            <Content>Header</Content>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Frame>
  );
}

export default Header;
