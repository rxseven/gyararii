import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from './index';

const title = 'Screens/Main/Home';
const component = <Home />;

storiesOf(title, module).add('default', () => component);
