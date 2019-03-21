import React from 'react';

import { factory, toMarkup } from 'tests/utilities';
import Hyperlink from '../index';

// Arrange
const seed = { content: 'content' };
const source = {
  children: <span>{seed.content}</span>,
  href: '/'
};
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Hyperlink, source, props);
}

// Test suites
describe('<Hyperlink />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render passed children correctly', () => {
    const expected = {
      content: input.content,
      html: input.children
    };
    const { component } = setup();

    expect(component).toHaveTextContent(expected.content);
    expect(component).toContainHTML(toMarkup(expected.html));
  });

  it('should open the specified URL', () => {
    const expected = { url: input.href };
    const { component } = setup();

    expect(component).toHaveAttribute('href', expected.url);
  });

  it('should open the linked document in a new window or tab by default', () => {
    const expected = { target: '_blank' };
    const { component } = setup();

    expect(component).toHaveAttribute('target', expected.target);
  });

  it('should open the linked document in the same frame as it was clicked', () => {
    const props = { replace: true };
    const expected = { target: '_self' };
    const { component } = setup(props);

    expect(component).toHaveAttribute('target', expected.target);
  });
});
