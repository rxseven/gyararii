import React from 'react';
import Alert from 'components/common/base/Alert';
import { factory } from 'tests/utilities';
import Error from '../index';

// Mock
jest.mock('components/common/base/Alert', () =>
  jest.fn(({ children }) => <div>{children}</div>)
);

// Arrange
const context = expect.any(Object);
const source = {
  error: [],
  onDismiss: jest.fn()
};
const input = { ...source };

// Setup
function setup(props) {
  return factory(Error, source, props);
}

// Cleanup
afterEach(() => {
  Alert.mockClear();
});

// Test suites
describe('<Error />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should not render an alert message when no error occurs', () => {
    setup();

    expect(Alert).not.toHaveBeenCalled();
  });

  it('should render alert messages when any errors occur', () => {
    const props = { error: ['Error 1'] };
    const expected = {
      arguments: {
        children: props.error[0],
        onDismiss: input.onDismiss
      },
      called: props.error.length,
      content: props.error[0]
    };
    const { component } = setup(props);

    expect(component).toHaveTextContent(expected.content);
    expect(Alert).toHaveBeenCalledWith(expected.arguments, context);
    expect(Alert).toHaveBeenCalledTimes(expected.called);
  });

  it('should render two error messages', () => {
    const props = { error: ['Error 1', 'Error 2'] };
    const expected = { called: props.error.length };
    setup(props);

    expect(Alert).toHaveBeenCalledTimes(expected.called);
  });
});
