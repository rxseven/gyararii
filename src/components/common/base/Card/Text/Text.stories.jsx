import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import Text from './index';

const { text } = mock;
const title = 'Components/Common/Base/Card/Text';

storiesOf(title, module).add('default', () => <Text>{text}</Text>);
