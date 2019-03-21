import React from 'react';
import { ThemeProvider } from 'styled-components';

import { factory, toMarkup } from 'tests/utilities';
import Theme from '../index';

// Mock
jest.mock('styled-components', () => {
  return {
    ThemeProvider: jest.fn(({ children }) => <div>{children}</div>)
  };
});

// Arrange
const seed = { content: 'content' };
const source = { children: <span>{seed.content}</span> };
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Theme, source, props);
}

// Cleanup
afterEach(() => {
  ThemeProvider.mockClear();
});

// Test suites
describe('<Providers.Theme />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render passed children correctly', () => {
    const expected = {
      content: input.content,
      html: input.children
    };
    const { component } = setup();

    expect(component).toHaveTextContent(expected.content);
    expect(component).toContainHTML(toMarkup(expected.html));
  });

  it('should render theme provider correctly', () => {
    setup();

    expect(ThemeProvider).toHaveBeenCalled();
  });
});
