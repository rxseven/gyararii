import { factory } from 'tests/utilities';
import Terms from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Terms, source, props);
}

// Test suites
describe('<Terms />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
