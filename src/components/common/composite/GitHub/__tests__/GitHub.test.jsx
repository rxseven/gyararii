import React from 'react';
import Icon from 'components/common/base/Icon';
import { factory } from 'tests/utilities';
import GitHub from '../index';

// Mock
jest.mock('components/common/base/Icon', () => jest.fn(() => <i />));

// Arrange
const context = expect.any(Object);
const source = {};

// Setup
function setup(props) {
  return factory(GitHub, source, props);
}

// Test suites
describe('<GitHub />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should have "title" attribute with the correct text', () => {
    const expected = { title: 'GitHub repo' };
    const { component } = setup();

    expect(component).toHaveAttribute('title', expected.title);
  });

  it('should link to the correct URL', () => {
    const expected = { link: 'https://github.com/rxseven/gyararii' };
    const { component } = setup();

    expect(component).toHaveAttribute('href', expected.link);
  });

  it(`should contain "GitHub" icon`, () => {
    const expected = { icon: { icon: ['fab', 'github-alt'] } };
    setup();

    expect(Icon).toHaveBeenCalledWith(expected.icon, context);
  });
});
