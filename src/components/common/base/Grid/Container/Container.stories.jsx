import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Container from './index';

const { content } = mock.elements;
const title = 'Components/Common/Base/Grid/Container';
const component = <Container>{content}</Container>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
