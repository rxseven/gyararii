import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Burger from './index';

const title = 'Components/Common/Base/Burger';
const actions = { onToggle: action('onToggle') };
const component = <Burger {...actions} />;

storiesOf(title, module).add('default', () => component);
