import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import mock from 'tests/mock';
import Row from '../index';

describe('<Row />', () => {
  // Arrange
  const props = { children: mock.elements.children };
  const component = <Row {...props} />;

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
