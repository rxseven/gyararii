import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import File from './index';

const title = 'Components/Common/Composite/File';
const props = {
  children: 'Upload',
  id: 'gallery',
  onUpload: action('onUpload')
};

storiesOf(title, module)
  .add('default', () => <File {...props} />, {
    notes: 'Let a user choose one or more files from their device storage.'
  })
  .add('with icon', () => <File {...props} icon="cloud-upload-alt" />, {
    notes: {
      markdown: `Pass icon name (string or array of string). Check out all available icons from [Font Awesome](https://fontawesome.com/icons?d=gallery).
        `
    }
  })
  .add(
    'disabled',
    () => <File {...props} icon="cloud-upload-alt" isLoading />,
    {
      notes: 'Disable a button while a network request is being submitted.'
    }
  )
  .add(
    'with spinner',
    () => <File {...props} id="avatar" isLoading spinner />,
    {
      notes:
        'Disable a button and show a spinner while a network request is being submitted.'
    }
  )
  .add('multiple', () => <File {...props} id="images" multiple />, {
    notes: 'To allow multiple files to be selected.'
  });
