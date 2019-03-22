import { factory } from 'tests/utilities';
import Jumper from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Jumper, source, props);
}

// Test suites
describe('<Jumper />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
