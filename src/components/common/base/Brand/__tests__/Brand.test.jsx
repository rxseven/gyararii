import { factory } from 'tests/utilities';
import Brand from '../index';

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Brand, source, props);
}

// Test suites
describe('<Brand />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render a logo containing the correct text', () => {
    const expected = { content: 'ギャラリー' };
    const { component } = setup();

    expect(component).toHaveTextContent(expected.content);
  });

  it('should have "title" attribute with the correct text', () => {
    const expected = { title: 'Gallery' };
    const { component } = setup();

    expect(component).toHaveAttribute('title', expected.title);
  });

  it('should link to root screen', () => {
    const expected = { url: '/' };
    const { component } = setup();

    expect(component).toHaveAttribute('href', expected.url);
  });
});
