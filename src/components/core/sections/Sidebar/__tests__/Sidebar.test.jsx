import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Environment from 'tests/environment';
import Sidebar from '../index';

describe('<Sidebar />', () => {
  // Arrange
  const props = { children: 'content' };
  const component = (
    <Environment>
      <Sidebar {...props} />
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
