import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Error from './index';

const title = 'Components/Common/Composite/Error';
const props = { error: ['Error 1', 'Error 2'], onDismiss: action('onDismiss') };
const component = <Error {...props} />;

storiesOf(title, module).add('default', () => component);
