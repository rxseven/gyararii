import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from 'stories/shared/notes';
import Toolbar from './index';

const title = 'Components/Common/Sections/Toolbar';
const props = { children: 'Content' };

storiesOf(title, module)
  .add('default', () => <Toolbar {...props} />, {
    notes: notes.minimal
  })
  .add('loading', () => <Toolbar {...props} isLoading />, {
    notes:
      'A component is invisible while a network request is being submitted.'
  });
