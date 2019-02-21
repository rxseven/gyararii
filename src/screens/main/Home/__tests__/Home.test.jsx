import { shallow } from 'enzyme';
import React from 'react';

import Home from '../index';

describe('<Home />', () => {
  // Arrange
  const component = <Home />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
