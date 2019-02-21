import React from 'react';
import { storiesOf } from '@storybook/react';

import Router from 'stories/decorators/Router';
import Routes from './index';

const title = 'Components/Core/Navigation/Routes';
const component = <Routes />;

storiesOf(title, module)
  .addDecorator(Router)
  .add('default (404)', () => component);
