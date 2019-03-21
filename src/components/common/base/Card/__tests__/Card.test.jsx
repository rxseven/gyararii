import React from 'react';

import { factory, toMarkup } from 'tests/utilities';
import Card from '../index';

// Arrange
const seed = { content: 'content' };
const source = { children: <span>{seed.content}</span> };
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Card, source, props);
}

// Test suites
describe('<Card />', () => {
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

  it('should align content to the left of the container by default', () => {
    const expected = { class: 'text-left' };
    const { component } = setup();

    expect(component).toHaveClass(expected.class);
  });

  it('should align content at the center of the container', () => {
    const props = { alignment: 'center' };
    const expected = { class: `text-${props.alignment}` };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should have a "primary" background', () => {
    const props = { background: 'primary' };
    const expected = { class: `bg-${props.background}` };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should render content with "red" color', () => {
    const props = { color: 'red' };
    const expected = { class: `text-${props.color}` };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should render card with custom class names', () => {
    const props = { className: 'custom-class' };
    const expected = { class: props.className };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should have "margin-bottom" with 1rem by default', () => {
    const expected = { class: 'mb-3' };
    const { component } = setup();

    expect(component).toHaveClass(expected.class);
  });

  it('should have "margin-bottom" with 1.5rem', () => {
    const props = { margin: '4' };
    const expected = { class: `mb-${props.margin}` };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should not have "margin-bottom" at the end of the card', () => {
    const props = { end: true, margin: '3' };
    const expected = { class: props.margin };
    const { component } = setup(props);

    expect(component).not.toHaveClass(expected.class);
  });
});
