import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Environment from 'tests/environment';
import mock from 'tests/mock';
import Sidebar from '../index';

const seed = {
  props: {
    children: mock.elements.children
  }
};

describe('<Sidebar />', () => {
  // Arrange
  const component = (
    <Environment>
      <Sidebar>{seed.props.children}</Sidebar>
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
