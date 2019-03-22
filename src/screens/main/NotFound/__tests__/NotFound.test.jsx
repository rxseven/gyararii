import { factory } from 'tests/utilities';
import NotFound from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(NotFound, source, props);
}

// Test suites
describe('<NotFound />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render the correct content', () => {
    const expected = { content: '404' };
    const { component } = setup();

    expect(component).toHaveTextContent(expected.content);
  });
});
