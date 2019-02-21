import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import mock from 'tests/mock';
import Row from '../index';

const seed = {
  props: {
    children: mock.elements.children
  }
};

describe('<Row />', () => {
  // Arrange
  const component = <Row>{seed.props.children}</Row>;

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
