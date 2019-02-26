import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Environment from 'tests/environment';
import Item from '../index';

describe('<Masonry.Item />', () => {
  // Arrange
  const props = {
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
  const component = (
    <Environment>
      <Item {...props} />
    </Environment>
  );

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });

  describe('Snapshot tests', () => {
    it('should render correctly', () => {
      // Act
      const tree = renderer.create(component).toJSON();

      // Assert
      expect(tree).toMatchSnapshot();
    });
  });
});
