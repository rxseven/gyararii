/* eslint-disable  */
import * as React from 'react';
import { hot } from 'react-hot-loader';

import {
  Body,
  Footer,
  Header,
  Main,
  Providers,
  Routes,
  Wrapper
} from 'components/core';

class App extends React.Component {
  render() {
    return (
      <Providers>
        <Wrapper>
          <Header />
          <Body>
            <Main>
              <Routes />
            </Main>
          </Body>
          <Footer />
        </Wrapper>
      </Providers>
    );
  }
}

export default hot(module)(App);
