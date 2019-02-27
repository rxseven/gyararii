import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Alert from '../index';

describe('<Alert />', () => {
  // Arrange
  const props = { children: 'content', onDismiss: jest.fn() };
  const component = <Alert {...props} />;

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
