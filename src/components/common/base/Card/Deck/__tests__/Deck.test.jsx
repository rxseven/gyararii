import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Deck from '../index';

const seed = {
  props: {
    children: 'Content'
  }
};

describe('<Card.Deck />', () => {
  // Arrange
  const component = <Deck>{seed.props.children}</Deck>;

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
