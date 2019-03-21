import React from 'react';
import { fireEvent } from 'react-testing-library';

import Icon from 'components/common/base/Icon';
import { factory } from 'tests/utilities';
import Burger from '../index';

// Mock
jest.mock('components/common/base/Icon', () => jest.fn(() => <i />));

// Arrange
const context = expect.any(Object);
const source = { onToggle: jest.fn() };

// Setup
function setup(props) {
  return factory(Burger, source, props);
}

// Test suites
describe('<Burger />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it(`should contain the correct icon`, () => {
    const expected = { icon: { icon: 'bars' } };
    setup();

    expect(Icon).toHaveBeenCalledWith(expected.icon, context);
  });

  it('should have "title" attribute with the correct text', () => {
    const expected = { title: 'Open menu' };
    const { component } = setup();

    expect(component).toHaveAttribute('title', expected.title);
  });

  it('should call onToggle() when it is clicked', () => {
    const expected = { called: 1 };
    const { component } = setup();

    fireEvent.click(component);

    expect(source.onToggle).toHaveBeenCalledTimes(expected.called);
  });
});
