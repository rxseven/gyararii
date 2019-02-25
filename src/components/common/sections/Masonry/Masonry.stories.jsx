import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Masonry from './index';

const title = 'Components/Common/Sections/Masonry';
const props = {
  images: [
    {
      public_id: 'image-001',
      secure_url: 'https://via.placeholder.com/480x320?text=Image-001',
      url: 'https://via.placeholder.com/480x320?text=Image-001'
    },
    {
      public_id: 'image-002',
      secure_url: 'https://via.placeholder.com/480x320?text=Image-002',
      url: 'https://via.placeholder.com/480x320?text=Image-002'
    }
  ],
  onPreview: action('onPreview'),
  onSelect: action('onSelect')
};

storiesOf(title, module)
  .add('has images', () => <Masonry {...props} />)
  .add('empty', () => <Masonry {...props} images={[]} />)
  .add('remaining images', () => <Masonry {...props} images={[]} isMore />);
