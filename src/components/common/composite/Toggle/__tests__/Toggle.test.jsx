import React from 'react';
import { fireEvent } from 'react-testing-library';

import { factory, toMarkup } from 'tests/utilities';
import Toggle from '../index';

// Arrange
const seed = { content: 'content' };
const source = {
  children: <span>{seed.content}</span>,
  onToggle: jest.fn()
};
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Toggle, source, props);
}

// Test suites
describe('<Toggle />', () => {
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

  it('should render a button with "secondary" style by default', () => {
    const expected = { class: 'btn-secondary' };
    const { component } = setup();

    expect(component).toHaveClass(expected.class);
  });

  it('should render a button with "primary" style when checked', () => {
    const props = { checked: true };
    const expected = { class: 'btn-primary' };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should call onToggle() when it is clicked', () => {
    const expected = { called: 1 };
    const { component } = setup();

    fireEvent.click(component);

    expect(input.onToggle).toHaveBeenCalledTimes(expected.called);
  });
});
