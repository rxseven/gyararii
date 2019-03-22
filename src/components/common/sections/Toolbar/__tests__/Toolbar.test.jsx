import React from 'react';

import { factory, toMarkup } from 'tests/utilities';
import Toolbar from '../index';

// Arrange
const seed = { content: 'content' };
const source = { children: <span>{seed.content}</span> };
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Toolbar, source, props);
}

// Test suites
describe('<Toolbar />', () => {
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

  it('should be visible by default', () => {
    const { component } = setup();

    expect(component).toBeVisible();
  });

  it('should be invisible when loading data', () => {
    const props = { isLoading: true };
    const { component } = setup(props);

    expect(component).not.toBeVisible();
  });
});
