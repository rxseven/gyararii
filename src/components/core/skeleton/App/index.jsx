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
  Sidebar,
  Tooltip,
  Wrapper
} from 'components/core';

function App() {
  return (
    <Providers>
      <Wrapper>
        <Header />
        <Sidebar />
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
