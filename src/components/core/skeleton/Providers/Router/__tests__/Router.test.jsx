import { shallow } from 'enzyme';
import React from 'react';

import mock from 'tests/mock';
import Router from '../index';

describe('<Router />', () => {
  // Arrange
  const props = { children: mock.elements.children };
  const component = <Router {...props} />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
