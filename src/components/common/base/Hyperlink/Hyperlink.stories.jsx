import React from 'react';
import { storiesOf } from '@storybook/react';

import Hyperlink from './index';

const title = 'Components/Common/Base/Hyperlink';
const component = <Hyperlink href="/">Link Text</Hyperlink>;

storiesOf(title, module).add('default', () => component);
