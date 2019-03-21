import { ThreeBounce } from 'better-react-spinkit';

import { factory } from 'tests/utilities';
import Spinner from '../index';

// Mock
jest.mock('better-react-spinkit');

// Arrange
const context = expect.any(Object);
const options = { duration: '1.25s', gutter: 5 };
const source = {};
const input = { ...options, ...source };

// Setup
function setup(props) {
  return factory(Spinner, source, props);
}

// Test suites
describe('<Spinner />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render with a default style', () => {
    const expected = {
      called: {
        ...input,
        color: '#999',
        size: 7
      }
    };
    setup();

    expect(ThreeBounce).toHaveBeenCalledWith(expected.called, context);
  });

  it('should render with custom "color" and "size"', () => {
    const props = {
      color: '666',
      size: 8
    };
    const expected = {
      called: {
        ...input,
        ...props
      }
    };
    setup(props);

    expect(ThreeBounce).toHaveBeenCalledWith(expected.called, context);
  });
});
