import React from 'react';
import { render } from 'tests/utilities';
import withLoadable from '../index';

// Arrange
const Component = withLoadable(() => import('/'));

// Setup
function setup() {
  return render(<Component />);
}

// Test suites
describe('<withLoadable HOC />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
