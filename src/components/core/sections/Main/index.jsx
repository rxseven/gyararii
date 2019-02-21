import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import styled from 'styled-components';

import Grid from 'components/common/base/Grid';

const Frame = styled.main`
  margin-top: 2.875rem;
`;

const propTypes = exact({
  children: PropTypes.element.isRequired
});

function Main({ children }) {
  return (
    <Frame>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>{children}</Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Frame>
  );
}

Main.prototype = propTypes;

export default Main;
