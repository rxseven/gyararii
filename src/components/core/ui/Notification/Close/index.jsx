import React from 'react';

import './Close.styles.scss';

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

export default Close;
