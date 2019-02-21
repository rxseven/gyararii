import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Column from './index';

const { content } = mock.elements;
const title = 'Components/Common/Base/Grid/Column';
const component = <Column>{content}</Column>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
