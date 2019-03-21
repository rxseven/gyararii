import React from 'react';
import Spinner from 'components/common/base/Spinner';
import { factory } from 'tests/utilities';
import Loader from '../index';

// Mock
jest.mock('components/common/base/Spinner', () => jest.fn(() => <i />));

// Arrange
const source = {};

// Setup
function setup(props) {
  return factory(Loader, source, props);
}

// Cleanup
afterEach(() => {
  Spinner.mockClear();
});

// Test suites
describe('<Loader />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render a dialog when the loader has errored', () => {
    const props = { error: true };
    const expected = {
      content: 'Something went wrong, please reload a webpage.'
    };
    const { component } = setup(props);

    expect(component).toHaveTextContent(expected.content);
  });

  it('should render spinner and message when loader has taken loger then the timeout', () => {
    const props = { timedOut: true };
    const expected = { content: 'Please take a moment' };
    const { component } = setup(props);

    expect(Spinner).toHaveBeenCalled();
    expect(component).toHaveTextContent(expected.content);
  });

  it('should render a spinner when the loader has taken longer than the delay', () => {
    const props = { pastDelay: true };
    setup(props);

    expect(Spinner).toHaveBeenCalled();
  });
});
