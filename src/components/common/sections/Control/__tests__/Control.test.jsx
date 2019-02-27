import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Environment from 'tests/environment';
import Control from '../index';

describe('<Control />', () => {
  // Arrange
  const props = {
    images: ['image-001', 'image-002'],
    onDeleteRequest: jest.fn(),
    onDeselect: jest.fn(),
    onError: jest.fn(),
    onSelectAll: jest.fn()
  };
  const component = (
    <Environment>
      <Control {...props} />
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
