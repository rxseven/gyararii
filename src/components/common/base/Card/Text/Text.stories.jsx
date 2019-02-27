import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './index';

const title = 'Components/Common/Base/Card/Text';
const component = <Text>Card Text</Text>;

storiesOf(title, module).add('default', () => component);
