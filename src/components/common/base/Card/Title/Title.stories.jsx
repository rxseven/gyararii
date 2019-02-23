import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from './index';

const title = 'Components/Common/Base/Card/Title';

storiesOf(title, module).add('default', () => <Title>Card Title</Title>);
