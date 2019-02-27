import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import Jumper from './index';

const { text } = mock;
const title = 'Components/Common/Base/Jumper';

storiesOf(title, module).add('default', () => (
  <div>
    <p>{text}</p>
    <p>{text}</p>
    <p>{text}</p>
    <p>{text}</p>
    <p>{text}</p>
    <p>{text}</p>
    <p>{text}</p>
    <p>{text}</p>
    <Jumper />
  </div>
));
