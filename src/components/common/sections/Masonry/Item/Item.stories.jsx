import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Item from './index';

const title = 'Components/Common/Sections/Masonry/Item';
const props = {
  image: {
    public_id: 'image-001',
    secure_url: 'https://via.placeholder.com/480x320?text=Image-001',
    url: 'https://via.placeholder.com/480x320?text=Image-001'
  },
  index: 1,
  onPreview: action('onPreview'),
  onSelect: action('onSelect')
};

storiesOf(title, module)
  .add('default', () => <Item {...props} />)
  .add('selected', () => <Item {...props} isSelected />)
  .add('to delete', () => <Item {...props} isSelected toDelete />)
  .add('deleting', () => <Item {...props} isLoading isSelected toDelete />);
