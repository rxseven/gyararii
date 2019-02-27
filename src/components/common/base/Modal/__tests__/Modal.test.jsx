import { shallow } from 'enzyme';
import React from 'react';

import Modal from '../index';

describe('<Modal />', () => {
  // Arrange
  const props = { children: 'content', isOpen: true, onClose: jest.fn() };
  const component = <Modal {...props} />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
