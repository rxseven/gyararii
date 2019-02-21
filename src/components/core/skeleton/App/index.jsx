/* eslint-disable  */
import * as React from 'react';
import { hot } from 'react-hot-loader';

import {
  Body,
  Footer,
  Header,
  Main,
  Router,
  Routes,
  Theme,
  Wrapper
} from 'components/core';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Theme>
          <Wrapper>
            <Header />
            <Body>
              <Main>
                <Routes />
              </Main>
            </Body>
            <Footer />
          </Wrapper>
        </Theme>
      </Router>
    );
  }
}

export default hot(module)(App);
