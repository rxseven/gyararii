import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import notes from 'stories/shared/notes';
import Header from './index';

const title = 'Components/Common/Base/Modal/Header';
const props = { children: 'Modal Header', onClose: action('onClose') };
const component = <Header {...props} />;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
