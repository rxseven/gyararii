import React from 'react';

import { render } from 'tests/utilities';
import withContext from '../index';

// Mock
const Component = jest.fn(() => <i />);

// Arrange
const Enhanced = withContext(Component);

// Setup
function setup(props) {
  return render(<Enhanced />);
}

// Test suites
describe('<withContext HOC />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render wrapped component correctly', () => {
    setup();

    expect(Component).toHaveBeenCalled();
  });
});
