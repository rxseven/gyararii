import React from 'react';
import { ToastContainer } from 'react-toastify';

import './Notification.styles.scss';

function Close({ closeToast }) {
  return (
    <span
      aria-hidden="true"
      className="notification-close"
      onClick={closeToast}
    >
      &times;
    </span>
  );
}

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
