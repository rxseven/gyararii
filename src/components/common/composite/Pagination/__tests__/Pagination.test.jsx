import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Environment from 'tests/environment';
import Pagination from '../index';

describe('<Pagination />', () => {
  // Arrange
  const props = {
    children: 'More images',
    isLoading: false,
    isMore: false,
    onLoad: jest.fn()
  };
  const component = (
    <Environment>
      <Pagination {...props} />
    </Environment>
  );

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });

  describe('Snapshot tests', () => {
    it('should render correctly', () => {
      // Act
      const tree = renderer.create(component).toJSON();

      // Assert
      expect(tree).toMatchSnapshot();
    });
  });
});
