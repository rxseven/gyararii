import { shallow } from 'enzyme';
import React from 'react';

import NotFound from '../index';

describe('<NotFound />', () => {
  // Arrange
  const component = <NotFound />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
