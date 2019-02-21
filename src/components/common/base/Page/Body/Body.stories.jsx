import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Body from './index';

const { content } = mock.elements;
const title = 'Components/Common/Base/Page/Body';
const component = <Body>{content}</Body>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
