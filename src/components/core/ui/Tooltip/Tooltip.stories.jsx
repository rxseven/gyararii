import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './index';

const title = 'Components/Core/UI/Tooltip';

storiesOf(title, module)
  .add('top (default)', () => (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s.
      </p>
      <p>
        <a data-tip="Tooltip" href="/">
          Link Text
        </a>
      </p>
      <Tooltip />
    </div>
  ))
  .add('right', () => (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s.
      </p>
      <p>
        <a data-place="right" data-tip="Tooltip" href="/">
          Link Text
        </a>
      </p>
      <Tooltip />
    </div>
  ));
