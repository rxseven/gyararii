import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Set from '../index';

describe('<Button.Set />', () => {
  // Arrange
  const component = (
    <Set>
      <button type="button">Button</button>
      <button type="button">Button</button>
    </Set>
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
