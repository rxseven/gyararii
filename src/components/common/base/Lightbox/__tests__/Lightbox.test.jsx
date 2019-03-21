import ReactImages from 'react-images';

import { factory } from 'tests/utilities';
import Lightbox from '../index';

// Mock
jest.mock('react-images');

// Arrange
const context = expect.any(Object);
const source = {
  currentImage: 1,
  images: [{ src: 'image-001' }, { src: 'image-002' }, { src: 'image-003' }],
  onClickNext: jest.fn(),
  onClickPrev: jest.fn(),
  onClose: jest.fn()
};
const input = { ...source };

// Setup
function setup(props) {
  return factory(Lightbox, source, props);
}

// Test suites
describe('<Lightbox />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should hide a lightbox by default', () => {
    const expected = {
      called: {
        ...input,
        backdropClosesModal: true,
        isOpen: false
      }
    };
    setup();

    expect(ReactImages).toHaveBeenCalledWith(expected.called, context);
  });

  it('should show a lightbox when "isOpen" prop is set to "true"', () => {
    const props = { ...input, isOpen: true };
    const expected = {
      called: {
        ...props,
        backdropClosesModal: true
      }
    };
    setup(props);

    expect(ReactImages).toHaveBeenCalledWith(expected.called, context);
  });
});
