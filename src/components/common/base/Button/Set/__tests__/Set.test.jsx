import React from 'react';

import { factory, toMarkup } from 'tests/utilities';
import Set from '../index';

// Arrange
const seed = { content: 'content' };
const source = { children: <button type="button">{seed.content}</button> };
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Set, source, props);
}

// Test suites
describe('<Button.Set />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render passed children correctly', () => {
    const expected = { html: input.children };
    const { component } = setup();

    expect(component).toContainHTML(toMarkup(expected.html));
  });
});
