import React from 'react';
import { ToastContainer } from 'react-toastify';

import { factory } from 'tests/utilities';
import Notification from '../index';

// Mock
jest.mock('react-toastify', () => {
  return {
    ToastContainer: jest.fn(() => <i />)
  };
});

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Notification, source, props);
}

// Test suites
describe('<Notification />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render a notification correctly', () => {
    setup();

    expect(ToastContainer).toHaveBeenCalled();
  });
});
