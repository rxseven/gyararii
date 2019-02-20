import { shallow } from 'enzyme';
import React from 'react';

import App from '../index';

describe('<App />', () => {
  // Arrange
  const component = <App />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
