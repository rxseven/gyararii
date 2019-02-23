import React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from './index';

const title = 'Components/Core/Base/Spinner';

storiesOf(title, module)
  .add('default', () => <Spinner />)
  .add('custom color', () => <Spinner color="#007BFD" />)
  .add('custom size', () => <Spinner size={15} />)
  .add('mix', () => <Spinner color="#007BFD" size={30} />);
