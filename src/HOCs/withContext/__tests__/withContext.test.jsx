import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import withContext from '../index';

describe('withContext HOC', () => {
  // Arrange
  const component = <withContext />;

  it('should render without crashing', () => {
    // Act
    const wrapper = shallow(component);

    // Assertions
    expect(wrapper).toBeDefined();
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
