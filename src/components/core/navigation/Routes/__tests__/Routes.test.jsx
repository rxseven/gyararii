import { shallow } from 'enzyme';
import React from 'react';

import Routes from '../index';

describe('<Routes />', () => {
  // Arrange
  const component = <Routes />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
