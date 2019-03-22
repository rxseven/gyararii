import React from 'react';

import { factory } from 'tests/utilities';
import Modal from '../index';

// Arrange
const seed = { content: 'content' };
const source = {
  children: <span>{seed.content}</span>,
  isOpen: true,
  onClose: jest.fn()
};

// Setup
function setup(props) {
  return factory(Modal, source, props);
}

// Test suites
describe('<Modal />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render passed children correctly', () => {
    const { queryByText } = setup();

    expect(queryByText(seed.content)).not.toBeNull();
  });
});
