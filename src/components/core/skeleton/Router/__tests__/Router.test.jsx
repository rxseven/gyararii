import { shallow } from 'enzyme';
import React from 'react';

import mock from 'tests/mock';
import Router from '../index';

const seed = {
  props: {
    children: mock.elements.children
  }
};

describe('<Router />', () => {
  // Arrange
  const component = <Router>{seed.props.children}</Router>;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
