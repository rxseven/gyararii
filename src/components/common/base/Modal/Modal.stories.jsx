import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import Modal from './index';

const { text } = mock;
const title = 'Components/Common/Base/Modal';
const props = { isOpen: false, onClose: action('onClose') };

storiesOf(title, module)
  .add('close (default)', () => <Modal {...props}>{text}</Modal>, {
    notes: 'A component is invisible by default (isOpen: false).'
  })
  .add('open', () => (
    <Modal {...props} isOpen>
      {text}
    </Modal>
  ))
  .add('assembled', () => (
    <Modal {...props} isOpen>
      <Modal.Header onClose={action('onClose')}>Header</Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>Footer</Modal.Footer>
    </Modal>
  ));
