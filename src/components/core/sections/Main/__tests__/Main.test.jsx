import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Main from '../index';

describe('<Main />', () => {
  // Arrange
  const props = { children: 'content' };
  const component = <Main {...props} />;

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
