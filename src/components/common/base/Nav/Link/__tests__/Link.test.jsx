import { factory } from 'tests/utilities';
import Link from '../index';

// Arrange
const source = {
  children: 'Link Text',
  to: '/'
};
const input = { ...source };

// Setup
function setup(props) {
  return factory(Link, source, props);
}

// Test suites
describe('<Nav.Link />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render passed children correctly', () => {
    const expected = { content: input.children };
    const { component } = setup();

    expect(component).toHaveTextContent(expected.content);
  });
});
