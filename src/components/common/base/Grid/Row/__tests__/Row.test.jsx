import React from 'react';

import { factory, toMarkup } from 'tests/utilities';
import Row from '../index';

// Arrange
const seed = { content: 'content' };
const source = { children: <span>{seed.content}</span> };
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Row, source, props);
}

// Test suites
describe('<Grid.Row />', () => {
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

  it('should align content at the center of the container', () => {
    const props = { alignment: 'justify-content-center' };
    const expected = { class: props.alignment };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });
});
