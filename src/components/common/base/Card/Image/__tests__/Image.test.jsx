import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../index';

describe('<Card.Image />', () => {
  // Arrange
  const component = <Image src="/gallery/image-001.png" />;

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
