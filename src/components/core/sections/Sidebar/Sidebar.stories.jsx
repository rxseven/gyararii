import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Sidebar from './index';

const { content } = mock.elements;
const title = 'Components/Core/Sections/Sidebar';
const component = <Sidebar>{content}</Sidebar>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
