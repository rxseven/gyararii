import { factory } from 'tests/utilities';

import Notification from 'components/core/ui/Notification';
import toast from '../toast';

// Arrange
const defaultProps = {};

// Setup
function setup(props) {
  return factory(Notification, defaultProps, props);
}

// Test suites
describe('toast helper', () => {
  it('should render without crashing', () => {
    setup();

    const result = toast({ message: 'Message' });

    expect(result).not.toBeNull();
  });
});
