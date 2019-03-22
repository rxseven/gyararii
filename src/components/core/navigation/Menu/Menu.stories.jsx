import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Menu from './index';

const title = 'Components/Core/Navigation/Menu';
const props = {
  isOpen: false,
  onClose: action('onClose'),
  onChange: action('onChange')
};

storiesOf(title, module)
  .add('close (default)', () => <Menu {...props} />, {
    notes: 'A component is invisible by default (isOpen: false).'
  })
  .add('open', () => <Menu {...props} isOpen />);
