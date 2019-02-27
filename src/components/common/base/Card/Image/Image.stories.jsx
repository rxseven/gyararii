import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './index';

const title = 'Components/Common/Base/Card/Image';
const props = { src: 'https://via.placeholder.com/480x320?text=Image-001' };
const component = <Image {...props} />;

storiesOf(title, module).add('default', () => component);
