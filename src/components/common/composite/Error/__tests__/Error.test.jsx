import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Error from '../index';

describe('<Error />', () => {
  // Arrange
  const props = { error: ['Error 1', 'Error 2'], onDismiss: jest.fn() };
  const component = <Error {...props} />;

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
