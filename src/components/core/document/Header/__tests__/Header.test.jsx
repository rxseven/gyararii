import { factory } from 'tests/utilities';
import Header from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Header, source, props);
}

// Test suites
describe('<Header />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
