import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Body from '../index';

const seed = {
  props: {
    children: 'Content'
  }
};

describe('<Card.Body />', () => {
  // Arrange
  const component = <Body>{seed.props.children}</Body>;

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
