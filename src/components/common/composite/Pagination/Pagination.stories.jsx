import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Pagination from './index';

const title = 'Components/Common/Composite/Pagination';
const props = {
  children: 'More images',
  isLoading: false,
  isMore: false,
  node: React.createRef(),
  onLoad: action('onLoad')
};

storiesOf(title, module)
  .add('default', () => <Pagination {...props} />, {
    notes: 'A component is invisible by default (isMore: false).'
  })
  .add('has next cursor', () => <Pagination {...props} isMore />)
  .add('loading', () => <Pagination {...props} isLoading />);
