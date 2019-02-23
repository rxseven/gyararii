import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';

const title = 'Components/Common/Base/Card/Header';

storiesOf(title, module).add('default', () => <Header>Card Header</Header>);
