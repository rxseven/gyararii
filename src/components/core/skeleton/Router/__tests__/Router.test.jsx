import { shallow } from 'enzyme';
import React from 'react';

import Router from '../index';

describe('<Router />', () => {
  // Arrange
  const component = <Router />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
