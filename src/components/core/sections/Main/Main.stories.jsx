import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Main from './index';

const { text } = mock;
const title = 'Components/Core/Sections/Main';
const component = <Main>{text}</Main>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
