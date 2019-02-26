import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import withLoadable from '../index';

describe('withLoadable HOC', () => {
  // Arrange
  const component = <withLoadable />;

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
