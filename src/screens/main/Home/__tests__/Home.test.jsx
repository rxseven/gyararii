import { factory } from 'tests/utilities';
import Home from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Home, source, props);
}

// Test suites
describe('<Home />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
