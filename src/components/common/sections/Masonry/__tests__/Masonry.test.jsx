import React from 'react';
import { factory } from 'tests/utilities';
import Item from '../Item';
import Masonry from '../index';

// Mock
jest.mock('../Item', () => jest.fn(() => <i />));

// Arrange
const source = {
  images: [
    {
      public_id: 'image-001',
      secure_url: 'gallery/image-001.jpg',
      url: 'gallery/image-001.jpg'
    }
  ],
  onLoaded: jest.fn(),
  onPreview: jest.fn(),
  onSelect: jest.fn()
};
const input = { ...source };

// Setup
function setup(props) {
  return factory(Masonry, source, props);
}

// Cleanup
afterEach(() => {
  Item.mockClear();
});

// Test suites
describe('<Masonry />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render one image', () => {
    const expected = { called: input.images.length };
    setup();

    expect(Item).toHaveBeenCalledTimes(expected.called);
  });

  it('should render two images', () => {
    const props = {
      images: [
        ...source.images,
        {
          public_id: 'image-002',
          secure_url: 'gallery/image-002.jpg',
          url: 'gallery/image-002.jpg'
        }
      ]
    };
    const expected = { called: props.images.length };
    setup(props);

    expect(Item).toHaveBeenCalledTimes(expected.called);
  });

  it('should render empty container when there are no images', () => {
    const props = { images: [] };
    const { queryByTestId } = setup(props);

    expect(queryByTestId('empty')).not.toBeNull();
  });

  it('should render a message when there are no images', () => {
    const props = { images: [] };
    const expected = { content: 'No images found' };
    const { component } = setup(props);

    expect(component).toHaveTextContent(expected.content);
  });

  it('should render a message when there are some images to be loaded automatically', () => {
    const props = {
      images: [],
      isMore: true
    };
    const expected = {
      content: 'Remaining images will be loaded automatically.'
    };
    const { component } = setup(props);

    expect(component).toHaveTextContent(expected.content);
  });
});
