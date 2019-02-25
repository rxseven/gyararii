import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import File from './index';

const title = 'Components/Common/Composite/File';
const actions = { onChange: action('onChange') };

storiesOf(title, module)
  .add('default', () => <File {...actions}>Upload</File>, {
    notes: 'Let a user choose one or more files from their device storage.'
  })
  .add(
    'with icon',
    () => (
      <File {...actions} icon="cloud-upload-alt" id="avatar">
        Upload
      </File>
    ),
    {
      notes: {
        markdown: `Pass icon name (string or array of string). Check out all available icons from [Font Awesome](https://fontawesome.com/icons?d=gallery).
        `
      }
    }
  )
  .add(
    'disabled',
    () => (
      <File {...actions} icon="cloud-upload-alt" id="avatar" isLoading>
        Upload
      </File>
    ),
    {
      notes: 'Disable a button while a network request is being submitted.'
    }
  )
  .add(
    'with spinner',
    () => (
      <File {...actions} id="avatar" isLoading spinner>
        Upload
      </File>
    ),
    {
      notes:
        'Disable a button and show a spinner while a network request is being submitted.'
    }
  )
  .add(
    'multiple',
    () => (
      <File {...actions} id="images" multiple>
        Upload multiple files
      </File>
    ),
    {
      notes: 'To allow multiple files to be selected.'
    }
  );
