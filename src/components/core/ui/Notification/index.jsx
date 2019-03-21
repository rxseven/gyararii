import React from 'react';
import { ToastContainer } from 'react-toastify';

import './Notification.styles.scss';
import Close from './Close';

function Notification(props) {
  return (
    <ToastContainer
      {...props}
      className="notification-container"
      closeButton={<Close />}
      progressClassName="notification-progressbar"
      toastClassName="notification-toast"
    />
  );
}

export default Notification;
