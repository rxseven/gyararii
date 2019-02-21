import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Document from './index';

const { content } = mock.elements;
const title = 'Components/Common/Base/Page/Document';
const component = <Document>{content}</Document>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});