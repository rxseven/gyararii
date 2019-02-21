import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Main from './index';

const { content } = mock.elements;
const title = 'Components/Core/Sections/Main';
const component = <Main>{content}</Main>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
