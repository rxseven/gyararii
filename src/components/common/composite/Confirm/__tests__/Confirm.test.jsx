import React from 'react';
import { fireEvent } from 'react-testing-library';

import { factory } from 'tests/utilities';
import Confirm from '../index';

// Arrange
const seed = { content: 'content' };
const source = {
  buttonConfirm: 'Delete',
  children: <span>{seed.content}</span>,
  isLoading: false,
  isOpen: true,
  onClose: jest.fn(),
  onConfirm: jest.fn(),
  title: 'Permanently Delete Images',
  type: 'danger'
};
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Confirm, source, props);
}

// Test suites
describe('<Confirm />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render cancel button with "Cancel" text by default', () => {
    const { queryByText } = setup();

    expect(queryByText('Cancel')).not.toBeNull();
  });

  it('should render a custom cancel button with "Discard" text', () => {
    const props = { buttonCancel: 'Discard' };
    const { queryByText } = setup(props);

    expect(queryByText(props.buttonCancel)).not.toBeNull();
  });

  it('should call onClose() when the "Cancel" button is clicked', () => {
    const expected = { called: 1 };
    const { getByText } = setup();

    fireEvent.click(getByText('Cancel'));

    expect(input.onClose).toHaveBeenCalledTimes(expected.called);
  });

  it('should call onConfirm() when the "Confirm" button is clicked', () => {
    const expected = { called: 1 };
    const { getByText } = setup();

    fireEvent.click(getByText(input.buttonConfirm));

    expect(input.onConfirm).toHaveBeenCalledTimes(expected.called);
  });

  it('should render header text correctly', () => {
    const { queryByText } = setup();

    expect(queryByText(input.title)).not.toBeNull();
  });

  it('should render body content correctly', () => {
    const { queryByText } = setup();

    expect(queryByText(input.content)).not.toBeNull();
  });
});
