import { factory } from 'tests/utilities';
import Routes from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Routes, source, props);
}

// Test suites
describe('<Routes />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
