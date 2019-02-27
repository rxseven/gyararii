import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from './index';

const title = 'Components/Core/Navigation/Menu';

storiesOf(title, module)
  .add('close (default)', () => <Menu />, {
    notes: 'A component is invisible by default (isOpen: false).'
  })
  .add('open', () => <Menu isOpen />);
