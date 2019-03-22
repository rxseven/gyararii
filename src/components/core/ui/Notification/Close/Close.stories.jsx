import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Close from './index';

const title = 'Components/Core/UI/Notification/Close';
const props = { closeToast: action('closeToast') };
const component = <Close {...props} />;

storiesOf(title, module).add('default', () => component);
