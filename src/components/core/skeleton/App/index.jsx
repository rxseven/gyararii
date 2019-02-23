import React from 'react';
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

function App() {
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

export default hot(module)(App);
