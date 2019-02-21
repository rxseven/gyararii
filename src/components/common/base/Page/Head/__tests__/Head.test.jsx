import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Head from '../index';

const seed = {
  props: {
    children: <title>Page Title</title>
  }
};

describe('<Head />', () => {
  // Arrange
  const component = <Head>{seed.props.children}</Head>;

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
