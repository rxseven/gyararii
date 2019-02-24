import React from 'react';
import { hot } from 'react-hot-loader';

import {
  Body,
  Footer,
  Header,
  Main,
  Notification,
  Providers,
  Routes,
  Tooltip,
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
        <Notification />
        <Tooltip />
      </Wrapper>
    </Providers>
  );
}

export default hot(module)(App);
