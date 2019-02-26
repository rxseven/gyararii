import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from 'stories/shared/notes';
import Toolbar from './index';

const title = 'Components/Common/Sections/Toolbar';

storiesOf(title, module)
  .add('default', () => <Toolbar>Content</Toolbar>, {
    notes: notes.minimal
  })
  .add('loading', () => <Toolbar isLoading>Content</Toolbar>, {
    notes:
      'A component is invisible while a network request is being submitted.'
  });
