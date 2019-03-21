import React from 'react';

import { factory, toMarkup } from 'tests/utilities';
import Column from '../index';

// Arrange
const seed = { content: 'content' };
const source = { children: <span>{seed.content}</span> };
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Column, source, props);
}

// Test suites
describe('<Grid.Column />', () => {
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

  it('should render a single column by default', () => {
    const expected = { class: 'col' };
    const { component } = setup();

    expect(component).toHaveClass(expected.class);
  });

  it('should render two columns when "size" prop is specified', () => {
    const props = { size: 'col-md-8' };
    const expected = { class: props.size };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });
});
