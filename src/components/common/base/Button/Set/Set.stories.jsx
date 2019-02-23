import React from 'react';
import { storiesOf } from '@storybook/react';

import Set from './index';

const title = 'Components/Common/Base/Button/Set';

storiesOf(title, module).add('default', () => (
  <Set>
    <button type="button">Button</button>
    <button type="button">Button</button>
  </Set>
));
