import { shallow } from 'enzyme';
import React from 'react';

import Notification from 'components/core/ui/Notification';
import toast from '../toast';

describe('toast helper', () => {
  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Arrange
      const container = <Notification />;

      // Act
      const wrapper = shallow(container);
      const result = toast({ message: 'Message' });

      // Assert
      expect(wrapper).toBeDefined();
      expect(result).toBeDefined();
    });
  });
});
