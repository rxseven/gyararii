import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './index';

const title = 'Components/Common/Base/Icon';

storiesOf(title, module)
  .addParameters({
    info: {
      text: `
      **Usage:** for more information, see [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome).
    `
    }
  })
  .add('solid (default)', () => <Icon icon="home" />)
  .add('regular', () => <Icon icon={['far', 'trash-alt']} />)
  .add('brand', () => <Icon icon={['fab', 'github-alt']} />);
