import React from 'react';
import Button from 'components/common/base/Button';
import Spinner from 'components/common/base/Spinner';
import { factory } from 'tests/utilities';
import Pagination from '../index';

// Mock
jest.mock('components/common/base/Button', () =>
  jest.fn(({ children }) => <div>{children}</div>)
);
jest.mock('components/common/base/Spinner', () => jest.fn(() => <i />));

// Arrange
const seed = { content: 'content' };
const source = {
  children: seed.content,
  isLoading: false,
  isMore: false,
  onLoad: jest.fn()
};
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(Pagination, source, props);
}

// Cleanup
afterEach(() => {
  Button.mockClear();
  Spinner.mockClear();
});

// Test suites
describe('<Pagination />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render nothing by default', () => {
    const { component } = setup();

    expect(component).not.toBeVisible();
  });

  it('should render a spinner when loading data', () => {
    const props = {
      isLoading: true,
      isMore: true
    };
    setup(props);

    expect(Button).not.toHaveBeenCalled();
    expect(Spinner).toHaveBeenCalled();
  });

  it('should render a button when more data is available', () => {
    const props = {
      isLoading: false,
      isMore: true
    };
    const expected = { content: input.children };
    const { component } = setup(props);

    expect(component).toHaveTextContent(expected.content);
    expect(Button).toHaveBeenCalled();
    expect(Spinner).not.toHaveBeenCalled();
  });
});
