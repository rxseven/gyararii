import { shallow } from 'enzyme';
import React from 'react';

import Confirm from '../index';

describe('<Confirm />', () => {
  // Arrange
  const props = {
    buttonConfirm: 'delete',
    children: 'content',
    isOpen: true,
    loading: false,
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    title: 'Permanently Delete Images',
    type: 'danger'
  };
  const component = <Confirm {...props} />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });
});
