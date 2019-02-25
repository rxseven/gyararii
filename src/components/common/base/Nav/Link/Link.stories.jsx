import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './index';

const title = 'Components/Common/Base/Nav/Link';
const props = { to: '/' };

storiesOf(title, module)
  .add('default', () => <Link {...props}>Nav Link</Link>)
  .add(
    'light',
    () => (
      <Link light {...props}>
        Nav Link
      </Link>
    ),
    {
      notes: 'Link text is white, use with dark background for readability.'
    }
  );
