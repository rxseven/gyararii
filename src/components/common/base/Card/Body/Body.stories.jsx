import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from 'stories/shared/notes';
import Body from './index';

const title = 'Components/Common/Base/Card/Body';
const component = <Body>Card Body</Body>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
