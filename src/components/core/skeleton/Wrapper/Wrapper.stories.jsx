import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Wrapper from './index';

const { text } = mock;
const title = 'Components/Core/Skeleton/Wrapper';
const component = <Wrapper>{text}</Wrapper>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
