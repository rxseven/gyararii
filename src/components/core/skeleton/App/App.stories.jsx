import React from 'react';
import { storiesOf } from '@storybook/react';

import App from './index';

const title = 'Components/Core/Skeleton/App';
const component = <App />;

storiesOf(title, module).add('default', () => component);
