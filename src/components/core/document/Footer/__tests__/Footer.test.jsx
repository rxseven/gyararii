import { factory } from 'tests/utilities';
import Footer from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Footer, source, props);
}

// Test suites
describe('<Footer />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
