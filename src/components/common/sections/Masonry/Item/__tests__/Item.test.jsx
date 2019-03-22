import { fireEvent } from 'react-testing-library';

import { factory } from 'tests/utilities';
import Item from '../index';

// Arrange
const source = {
  image: {
    public_id: 'image-001',
    secure_url: 'gallery/image-001.jpg',
    url: 'gallery/image-001.jpg'
  },
  index: 1,
  onLoaded: jest.fn(),
  onPreview: jest.fn(),
  onSelect: jest.fn()
};
const input = { ...source };

// Setup
function setup(props) {
  return factory(Item, input, props);
}

// Test suites
describe('<Masonry.Item />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should call onSelect() when the select button is clicked', () => {
    const { getByTestId } = setup();
    const expected = {
      arguments: input.image.public_id,
      called: 1
    };

    fireEvent.click(getByTestId('select'));

    expect(input.onSelect).toHaveBeenCalledTimes(expected.called);
    expect(input.onSelect).toHaveBeenCalledWith(expected.arguments);
  });

  it('should call onPreview() when the image is clicked', () => {
    const { getByTestId } = setup();
    const expected = {
      arguments: input.index,
      called: 1
    };

    fireEvent.click(getByTestId('frame'));

    expect(input.onPreview).toHaveBeenCalledTimes(expected.called);
    expect(input.onPreview).toHaveBeenCalledWith(expected.arguments);
  });
});
