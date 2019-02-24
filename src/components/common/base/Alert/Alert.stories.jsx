import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Alert from './index';

const title = 'Components/Common/Base/Alert';
const props = { children: 'Alert message', onDismiss: action('onDismiss') };
const component = <Alert {...props} />;

storiesOf(title, module).add('default', () => component);
