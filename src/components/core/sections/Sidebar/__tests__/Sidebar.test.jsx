import { factory } from 'tests/utilities';
import Sidebar from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Sidebar, source, props);
}

// Test suites
describe('<Sidebar />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
