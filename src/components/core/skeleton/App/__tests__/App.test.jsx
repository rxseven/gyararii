import { factory } from 'tests/utilities';
import App from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(App, source, props);
}

// Test suites
describe('<App />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
