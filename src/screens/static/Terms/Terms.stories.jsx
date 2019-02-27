import React from 'react';
import { storiesOf } from '@storybook/react';

import Terms from './index';

const title = 'Screens/Static/Terms';
const component = <Terms />;

storiesOf(title, module).add('default', () => component);
