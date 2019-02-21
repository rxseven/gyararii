import React from 'react';
import { storiesOf } from '@storybook/react';

import NotFound from './index';

const title = 'Screens/Main/Not Found (404)';
const component = <NotFound />;

storiesOf(title, module).add('default', () => component);
