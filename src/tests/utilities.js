/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { render } from 'react-testing-library';
import { isEmpty } from 'lodash';

import Providers from 'components/core/skeleton/Providers';

// Providers wrapper
function Wrapper({ children }) {
  return <Providers>{children}</Providers>;
}

// Custom render method
function customRender(ui, options) {
  return render(ui, { wrapper: Wrapper, ...options });
}

// Factory function
function factory(Component, defaultProps, props = {}) {
  let restProps = { ...defaultProps, ...props };

  if (isEmpty(props)) {
    restProps = defaultProps;
  }

  const utilities = customRender(<Component {...restProps} />);
  const component = utilities.container.firstChild;

  return { ...utilities, component };
}

// Render to HTML markup
function toMarkup(value) {
  return ReactDOMServer.renderToStaticMarkup(value);
}

export { customRender as render, factory, toMarkup };
