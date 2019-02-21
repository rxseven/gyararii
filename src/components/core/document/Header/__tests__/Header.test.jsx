import { shallow } from 'enzyme';
import React from 'react';

import Header from '../index';

describe('<Header />', () => {
  // Arrange
  const component = <Header />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
