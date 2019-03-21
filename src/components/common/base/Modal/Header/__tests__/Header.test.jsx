import React from 'react';
import { fireEvent } from 'react-testing-library';

import { factory, toMarkup } from 'tests/utilities';
import Header from '../index';

// Arrange
const seed = { content: 'content' };
const source = {
  children: <span>{seed.content}</span>,
  onClose: jest.fn()
};
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Header, source, props);
}

// Test suites
describe('<Modal.Header />', () => {
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

  it('should call onClose() when the close button is clicked', () => {
    const expected = { called: 1 };
    const { getByText } = setup();

    fireEvent.click(getByText('×'));

    expect(input.onClose).toHaveBeenCalledTimes(expected.called);
  });
});
