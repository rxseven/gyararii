import ReactTooltip from 'react-tooltip';
import { factory } from 'tests/utilities';
import Tooltip from '../index';

// Mock
jest.mock('react-tooltip');

// Arrange
const context = expect.any(Object);
const source = {};

// Setup
function setup(props) {
  return factory(Tooltip, source, props);
}

// Test suites
describe('<Tooltip />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render a tooltip correctly', () => {
    const expected = { arguments: { effect: 'solid', place: 'top' } };
    setup();

    expect(ReactTooltip).toHaveBeenCalledWith(expected.arguments, context);
  });
});
