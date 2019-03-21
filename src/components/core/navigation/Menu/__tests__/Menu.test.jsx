import { factory } from 'tests/utilities';
import Menu from '../index';

// Arrange
const source = {
  isOpen: false,
  onClose: jest.fn(),
  onChange: jest.fn()
};

// Setup
function setup(props) {
  return factory(Menu, source, props);
}

// Test suites
describe('<Menu />', () => {
  it('should render without crashing', () => {
    setup();
  });
});
