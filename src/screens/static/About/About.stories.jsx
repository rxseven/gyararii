import React from 'react';
import { storiesOf } from '@storybook/react';

import About from './index';

const title = 'Screens/Static/About';
const component = <About />;

storiesOf(title, module).add('default', () => component);
