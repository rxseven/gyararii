/* eslint-disable import/prefer-default-export */
import React from 'react';
import { render } from 'react-testing-library';

import Providers from 'components/core/skeleton/Providers';

// Providers wrapper
function Wrapper({ children }) {
  return <Providers>{children}</Providers>;
}

// Custom render method
function customRender(ui, options) {
  return render(ui, { wrapper: Wrapper, ...options });
}

export { customRender as render };
