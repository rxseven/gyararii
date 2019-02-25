import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Lightbox from '../index';

describe('<Lightbox />', () => {
  // Arrange
  const props = {
    currentImage: 1,
    images: [{ src: 'image-001' }, { src: 'image-002' }, { src: 'image-003' }],
    isOpen: false,
    onClickNext: jest.fn(),
    onClickPrev: jest.fn(),
    onClose: jest.fn()
  };
  const component = <Lightbox {...props} />;

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
