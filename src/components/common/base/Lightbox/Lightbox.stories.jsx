import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Lightbox from './index';

const title = 'Components/Common/Base/Lightbox';
const props = {
  currentImage: 1,
  images: [
    { src: 'https://via.placeholder.com/480x320?text=Image-001' },
    { src: 'https://via.placeholder.com/480x320?text=Image-002' },
    { src: 'https://via.placeholder.com/480x320?text=Image-003' }
  ],
  isOpen: false,
  onClickNext: action('onClickNext'),
  onClickPrev: action('onClickPrev'),
  onClose: action('onClose')
};

storiesOf(title, module)
  .add('close (default)', () => <Lightbox {...props} />, {
    notes: 'A component is invisible by default (isOpen: false).'
  })
  .add('open', () => <Lightbox {...props} isOpen />);
