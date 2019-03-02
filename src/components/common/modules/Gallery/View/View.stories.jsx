import React from 'react';
import { action } from '@storybook/addon-actions';
import LinkTo from '@storybook/addon-links/react';
import { storiesOf } from '@storybook/react';

import Main from 'components/core/sections/Main';
import Wrapper from 'stories/decorators/Wrapper';
import Footnote from 'stories/utilities/Footnote';

import Gallery from '../Gallery.stories';
import View from './index';

const title = 'Components/Common/Modules/Gallery/View';
const props = {
  // Toolbar
  nodeTop: React.createRef(),

  // File
  id: 'gallery',
  onUpload: action('onUpload'),

  // Control
  onDeleteRequest: action('onDeleteRequest'),
  onDeselect: action('onDeselect'),
  onScrollTop: action('onScrollTop'),
  onSelectAll: action('onSelectAll'),

  // Error
  error: [],
  onDismiss: action('onDismiss'),

  // Masonry
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
    },
    {
      public_id: 'image-003',
      secure_url: 'https://via.placeholder.com/480x320?text=Image-003',
      url: 'https://via.placeholder.com/480x320?text=Image-003'
    }
  ],
  selected: [],
  onAutoscroll: action('onAutoscroll'),
  onLightboxOpen: action('onLightboxOpen'),
  onLoaded: action('onLoaded'),
  onSelect: action('onSelect'),

  // Pagination
  isMore: false,
  onLoad: action('onLoad'),

  // Confirm
  buttonConfirm: 'delete',
  isModal: false,
  onDeleteCancel: action('onDeleteCancel'),
  onDeleteConfirm: action('onDeleteConfirm'),
  title: 'Permanently Delete Images',

  // Lightbox
  currentImage: 1,
  onLightboxNext: action('onLightboxNext'),
  onLightboxPrev: action('onLightboxPrev'),
  onLightboxClose: action('onLightboxClose')
};

storiesOf(title, module)
  .addDecorator(story => (
    <Wrapper>
      <Main>{story()}</Main>
    </Wrapper>
  ))
  .addDecorator(story => (
    <div>
      {story()}
      <Footnote>
        Use it in conjunction with its{' '}
        <LinkTo
          kind={Gallery.title}
          story="open"
          title="Link to Gallery component"
        >
          container
        </LinkTo>{' '}
        component.
      </Footnote>
    </div>
  ))
  .addParameters({
    info: {
      text: `
        **Usage:** use it in conjunction with its container component.
      `
    }
  })
  .add('empty', () => <View {...props} images={[]} />)
  .add('preloading', () => (
    <View
      {...props}
      images={[]}
      isFetching
      isPreloading
      pagination="cursor"
      status="Loading images..."
    />
  ))
  .add('loading more', () => (
    <View
      {...props}
      isFetching
      pagination="cursor"
      status="Loading images..."
    />
  ))
  .add('with images', () => <View {...props} />)
  .add('with status', () => (
    <View {...props} status="Deleted 2 images successfully" />
  ))
  .add('with errors', () => <View {...props} error={['Error 1', 'Error 2']} />)
  .add('with selected', () => <View {...props} selected={['image-001']} />)
  .add('with pagination', () => <View {...props} pagination="cursor" />);

export default { title };
