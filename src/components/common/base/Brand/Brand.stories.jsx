import React from 'react';
import { storiesOf } from '@storybook/react';

import Brand from './index';

const title = 'Components/Common/Base/Brand';
const component = <Brand />;

storiesOf(title, module).add('default', () => component);
