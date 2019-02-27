import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Control from './index';

const title = 'Components/Common/Sections/Control';
const props = {
  images: ['image-001', 'image-002'],
  onDeleteRequest: action('onDeleteRequest'),
  onDeselect: action('onDeselect'),
  onError: action('onError'),
  onSelectAll: action('onSelectAll')
};

storiesOf(title, module)
  .add('with images', () => <Control {...props} />)
  .add('with selected', () => <Control {...props} selected={['image-001']} />)
  .add('with errors', () => <Control {...props} error={['error-001']} />)
  .add('with status', () => <Control {...props} status="Loading images..." />)
  .add(
    'loading',
    () => <Control {...props} selected={['image-001']} isLoading />,
    {
      notes: 'Disable buttons while a network request is being submitted.'
    }
  );
