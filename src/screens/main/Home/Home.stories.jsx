import React from 'react';
import { storiesOf } from '@storybook/react';

import Main from 'components/core/sections/Main';
import Wrapper from 'stories/decorators/Wrapper';
import Home from './index';

const title = 'Screens/Main/Home';
const component = <Home />;

storiesOf(title, module)
  .addDecorator(story => (
    <Wrapper>
      <Main>{story()}</Main>
    </Wrapper>
  ))
  .add('default', () => component);
