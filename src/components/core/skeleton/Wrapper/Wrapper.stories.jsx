import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Wrapper from './index';

const { content } = mock.elements;
const title = 'Components/Core/Skeleton/Wrapper';
const component = <Wrapper>{content}</Wrapper>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
