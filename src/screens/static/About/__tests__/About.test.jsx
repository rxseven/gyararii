import { shallow } from 'enzyme';
import React from 'react';

import About from '../index';

describe('<About />', () => {
  // Arrange
  const component = <About />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
