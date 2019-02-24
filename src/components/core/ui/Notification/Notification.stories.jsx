import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { storiesOf } from '@storybook/react';

import Notification from './index';

const title = 'Components/Core/UI/Notification';

function Toast() {
  useEffect(() => {
    toast.error('Notification message', {
      autoClose: false,
      position: toast.POSITION.TOP_LEFT
    });
  });

  return <Notification />;
}

storiesOf(title, module).add('default', () => <Toast />);
