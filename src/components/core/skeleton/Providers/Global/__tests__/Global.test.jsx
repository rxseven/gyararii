import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import mock from 'tests/mock';
import Global from '../index';

const seed = {
  props: {
    children: mock.elements.children
  }
};

describe('<Global />', () => {
  // Arrange
  const component = <Global>{seed.props.children}</Global>;

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
