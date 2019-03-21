import { factory } from 'tests/utilities';
import About from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(About, source, props);
}

// Test suites
describe('<About />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
