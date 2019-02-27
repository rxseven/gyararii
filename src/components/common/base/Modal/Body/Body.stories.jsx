import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Body from './index';

const { text } = mock;
const title = 'Components/Common/Base/Modal/Body';
const component = <Body>{text}</Body>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
