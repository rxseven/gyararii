import React from 'react';
import { storiesOf } from '@storybook/react';

import Hyperlink from './index';

const title = 'Components/Common/Base/Hyperlink';
const props = { children: 'Link Text', href: '/' };
const component = <Hyperlink {...props} />;

storiesOf(title, module).add('default', () => component);
