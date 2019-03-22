import React from 'react';
import { fireEvent } from 'react-testing-library';

import Icon from 'components/common/base/Icon';
import Spinner from 'components/common/base/Spinner';
import { factory, toMarkup } from 'tests/utilities';
import Button from '../index';

// Mock
jest.mock('components/common/base/Icon', () => jest.fn(() => <i />));
jest.mock('components/common/base/Spinner', () => jest.fn(() => <i />));

// Arrange
const context = expect.any(Object);
const seed = { content: 'content' };
const source = {
  content: seed.content,
  onClick: jest.fn()
};
const input = {
  ...seed,
  ...source,
  children: <span>{seed.content}</span>
};

// Setup
function setup(props) {
  return factory(Button, source, props);
}

// Test suites
describe('<Button />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render "button" tag with "button" type by default', () => {
    const expected = { type: 'button' };
    const { component } = setup();

    expect(component).toHaveAttribute('type', expected.type);
  });

  it('should render "button" tag with "submit" type', () => {
    const props = { type: 'submit' };
    const expected = { ...props };
    const { component } = setup(props);

    expect(component).toHaveAttribute('type', expected.type);
  });

  it('should render a passive button', () => {
    const props = { passive: true };
    const expected = { type: 'button' };
    const { component } = setup(props);

    expect(component).not.toHaveAttribute('type', expected.type);
  });

  it('should render a disabled button when loading data', () => {
    const props = { isLoading: true };
    const { component } = setup(props);

    expect(component).toBeDisabled();
  });

  it('should show a spinner when loading data', () => {
    const props = {
      children: input.children,
      isLoading: true,
      spinner: true
    };
    const expected = { called: { color: '#fff' } };
    const { getByTestId } = setup(props);

    expect(getByTestId('spinner')).toBeVisible();
    expect(Spinner).toHaveBeenCalledWith(expected.called, context);
  });

  it('should render a button as a "block" element', () => {
    const props = { block: true };
    const expected = { class: 'btn-block' };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should render "danger" style', () => {
    const props = { look: 'danger' };
    const expected = { class: `btn-${props.look}` };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should render "outline" style', () => {
    const props = { outline: 'primary' };
    const expected = { class: `btn-outline-${props.outline}` };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it('should render "large" button', () => {
    const props = { size: 'lg' };
    const expected = { class: `btn-${props.size}` };
    const { component } = setup(props);

    expect(component).toHaveClass(expected.class);
  });

  it(`should contain "trash" icon`, () => {
    const props = { icon: 'trash' };
    const expected = { icon: { ...props } };
    setup(props);

    expect(Icon).toHaveBeenCalledWith(expected.icon, context);
  });

  it('should call onClick() when it is clicked', () => {
    const expected = { called: 1 };
    const { component } = setup();

    fireEvent.click(component);

    expect(input.onClick).toHaveBeenCalledTimes(expected.called);
  });

  it('should not render children by default', () => {
    const { component } = setup();

    expect(component).toBeEmpty();
  });

  it('should render passed children correctly', () => {
    const props = { children: input.children };
    const expected = {
      content: input.content,
      html: input.children
    };
    const { component } = setup(props);

    expect(component).toHaveTextContent(expected.content);
    expect(component).toContainHTML(toMarkup(expected.html));
  });
});
