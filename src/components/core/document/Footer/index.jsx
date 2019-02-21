import React from 'react';
import styled from 'styled-components';

import Grid from 'components/common/base/Grid';

const Frame = styled.footer`
  background-color: #343a40;
  color: #999;
  flex-shrink: 0;
  padding: 1.5rem 0;
`;

const Info = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    text-align: left;
  }
`;

const Text = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;

  :last-child {
    margin-bottom: 0;
  }
`;

function Footer() {
  return (
    <Frame>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>
            <Info>
              <Text>Designed &amp; built with all the love in React.</Text>
              <Text>Copyright © 2019 Theerawat Pongsupawat.</Text>
            </Info>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Frame>
  );
}

export default Footer;
