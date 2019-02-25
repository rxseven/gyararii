import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import Confirm from './index';

const { text } = mock;
const title = 'Components/Common/Composite/Confirm';
const props = {
  buttonConfirm: 'delete',
  isLoading: false,
  isOpen: false,
  onClose: action('onClose'),
  onConfirm: action('onConfirm'),
  title: 'Permanently Delete Images'
};

storiesOf(title, module)
  .add('close (default)', () => <Confirm {...props}>{text}</Confirm>, {
    notes: 'A component is invisible by default (isOpen: false).'
  })
  .add('open', () => (
    <Confirm {...props} isOpen>
      {text}
    </Confirm>
  ))
  .add('button & type', () => (
    <Confirm
      {...props}
      buttonCancel="Save draft"
      buttonConfirm="Publish"
      isOpen
      title="Publish New Post"
      type="primary"
    >
      {text}
    </Confirm>
  ))
  .add(
    'loading',
    () => (
      <Confirm {...props} isOpen isLoading>
        {text}
      </Confirm>
    ),
    {
      notes:
        'Disable buttons and show a spinner while a network request is being submitted.'
    }
  );
