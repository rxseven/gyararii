import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Row from './index';

const { content } = mock.elements;
const title = 'Components/Common/Base/Grid/Row';
const props = { children: content };

storiesOf(title, module)
  .add('default', () => <Row {...props} />, {
    notes: notes.minimal
  })
  .add('alignment', () => <Row {...props} alignment="justify-content-end" />);
