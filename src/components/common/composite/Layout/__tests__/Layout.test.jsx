import React from 'react';

import Column from 'components/common/base/Grid/Column';
import { factory, toMarkup } from 'tests/utilities';
import Layout from '../index';

// Mock
jest.mock('components/common/base/Grid/Column', () =>
  jest.fn(({ children }) => <div>{children}</div>)
);

// Arrange
const context = expect.any(Object);
const seed = { content: 'content' };
const source = { children: <span>{seed.content}</span> };
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Layout, source, props);
}

// Test suites
describe('<Layout />', () => {
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

  it('should align content at the center of the container by default', () => {
    const expected = { class: 'justify-content-sm-center' };
    const { component } = setup();

    expect(component).toHaveClass(expected.class);
  });

  it('should align content to the left of the container', () => {
    const props = { alignment: 'justify-content-sm-left' };
    const expected = { class: props.alignment };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should render content within a single grid column by default', () => {
    const expected = {
      arguments: {
        children: input.children,
        size: 'col'
      }
    };
    setup();

    expect(Column).toHaveBeenCalledWith(expected.arguments, context);
  });

  it('should render content within six grid columns', () => {
    const props = { size: 'col-md-6' };
    const expected = {
      arguments: {
        children: input.children,
        size: props.size
      }
    };
    setup(props);

    expect(Column).toHaveBeenCalledWith(expected.arguments, context);
  });

  it('should render content within an "adaptive" layout', () => {
    const props = { adaptive: true };
    const expected = {
      arguments: {
        children: input.children,
        size: 'col-md-10 col-lg-8'
      }
    };
    setup(props);

    expect(Column).toHaveBeenCalledWith(expected.arguments, context);
  });
});
