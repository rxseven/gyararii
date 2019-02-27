import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';

const title = 'Components/Core/Document/Header';
const component = <Header />;

storiesOf(title, module).add('default', () => component);
