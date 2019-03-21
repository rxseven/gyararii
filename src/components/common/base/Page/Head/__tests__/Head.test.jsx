import React from 'react';
import { Helmet } from 'react-helmet';

import { factory } from 'tests/utilities';
import Head from '../index';

// Mock
jest.mock('react-helmet');

// Arrange
const context = expect.any(Object);
const source = { children: <title>Page title</title> };
const input = { ...source };

// Setup
function setup(props) {
  return factory(Head, source, props);
}

// Test suites
describe('<Page.Head />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render passed children correctly', () => {
    const expected = { content: { children: input.children } };
    setup();

    expect(Helmet).toHaveBeenCalledWith(expected.content, context);
  });
});
