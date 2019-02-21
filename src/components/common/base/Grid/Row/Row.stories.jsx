import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Row from './index';

const { content } = mock.elements;
const title = 'Components/Common/Base/Grid/Row';
const component = <Row>{content}</Row>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
