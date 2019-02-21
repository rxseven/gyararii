import React from 'react';
import { storiesOf } from '@storybook/react';

import Routes from './index';

const title = 'Components/Core/Navigation/Routes';
const component = <Routes />;

storiesOf(title, module).add('default (404)', () => component);
