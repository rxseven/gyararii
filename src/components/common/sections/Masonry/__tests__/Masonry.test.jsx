import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Environment from 'tests/environment';
import Masonry from '../index';

describe('<Masonry />', () => {
  // Arrange
  const props = {
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
  const component = (
    <Environment>
      <Masonry {...props} />
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
