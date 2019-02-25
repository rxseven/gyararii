import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './index';

const title = 'Components/Common/Base/Card/Image';

storiesOf(title, module).add('default', () => (
  <Image src="https://via.placeholder.com/480x320?text=Image-001" />
));
