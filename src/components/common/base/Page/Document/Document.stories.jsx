import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Document from './index';

const { text } = mock;
const title = 'Components/Common/Base/Page/Document';
const component = <Document>{text}</Document>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
