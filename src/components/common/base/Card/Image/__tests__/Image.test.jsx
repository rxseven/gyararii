import Img from 'react-image';

import { factory } from 'tests/utilities';
import Image from '../index';

// Mock
jest.mock('react-image');

// Arrange
const context = expect.any(Object);
const seed = {
  alt: '',
  className: 'card-img',
  src: '/gallery/image-001.png'
};
const source = { src: seed.src };
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Image, source, props);
}

// Test suites
describe('<Card.Image />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render passed image', () => {
    const expected = { called: { ...input } };
    setup();

    expect(Img).toHaveBeenCalledWith(expected.called, context);
  });

  it('should render with custom "alt" prop', () => {
    const props = { alt: 'Gallery' };
    const expected = { called: { ...input, ...props } };
    setup(props);

    expect(Img).toHaveBeenCalledWith(expected.called, context);
  });

  it('should render with custom class names', () => {
    const props = { className: 'custom-class' };
    const expected = {
      called: {
        ...input,
        className: `card-img ${props.className}`
      }
    };
    setup(props);

    expect(Img).toHaveBeenCalledWith(expected.called, context);
  });
});
