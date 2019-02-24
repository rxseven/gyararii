import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import notes from 'stories/shared/notes';
import Header from './index';

const title = 'Components/Common/Base/Modal/Header';
const component = <Header onClose={action('onClose')}>Modal Header</Header>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
