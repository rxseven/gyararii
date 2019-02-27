import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';

const title = 'Components/Common/Base/Card/Header';
const component = <Header>Card Header</Header>;

storiesOf(title, module).add('default', () => component);
