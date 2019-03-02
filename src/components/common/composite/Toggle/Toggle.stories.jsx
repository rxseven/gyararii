import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Toggle from './index';

const props = { children: 'Toggle Button', onToggle: action('onToggle') };
const title = 'Components/Common/Composite/Toggle';

storiesOf(title, module)
  .add('unchecked (default)', () => <Toggle {...props} />)
  .add('unchecked', () => <Toggle {...props} checked />);
