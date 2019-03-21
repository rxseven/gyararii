import { fireEvent } from 'react-testing-library';

import { factory } from 'tests/utilities';
import Control from '../index';

// Arrange
const source = {
  images: ['image-001', 'image-002'],
  onDeleteRequest: jest.fn(),
  onDeselect: jest.fn(),
  onError: jest.fn(),
  onSelectAll: jest.fn()
};
const input = { ...source };

// Setup
function setup(props) {
  return factory(Control, source, props);
}

// Test suites
describe('<Control />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render control panel when any image is selected', () => {
    const props = { selected: ['image-001'] };
    const { getByTestId } = setup(props);

    expect(getByTestId('panel')).not.toBeNull();
  });

  it('should render summary when any image is selected', () => {
    const props = { selected: ['image-001'] };
    const expected = { content: `${props.selected.length} selected` };
    const { getByTestId } = setup(props);

    expect(getByTestId('panel')).toHaveTextContent(expected.content);
  });

  it('should render summary when all images are selected', () => {
    const props = { selected: ['image-001', 'image-002'] };
    const expected = { content: `All ${props.selected.length} selected` };
    const { getByTestId } = setup(props);

    expect(getByTestId('panel')).toHaveTextContent(expected.content);
  });

  it('should render status message', () => {
    const props = { status: 'Uploading images...' };
    const expected = { content: props.status };
    const { getByTestId } = setup(props);
    const status = getByTestId('status');

    expect(status).not.toBeNull();
    expect(status).toHaveTextContent(expected.content);
  });

  it('should render meta data when have images', () => {
    const expected = { content: `Showing ${input.images.length} images` };
    const { getByTestId } = setup();
    const meta = getByTestId('meta');

    expect(meta).not.toBeNull();
    expect(meta).toHaveTextContent(expected.content);
  });

  it('should render meta data when have images and errors', () => {
    const props = { error: ['error-001'] };
    const expected = {
      content: `Showing ${input.images.length} images with ${
        props.error.length
      } error`
    };
    const { getByTestId } = setup(props);
    const meta = getByTestId('meta');

    expect(meta).not.toBeNull();
    expect(meta).toHaveTextContent(expected.content);
  });

  it('should call onSelectAll() when "Select all" button is clicked', () => {
    const props = { selected: ['image-001'] };
    const expected = { called: 1 };
    const { getByText } = setup(props);

    fireEvent.click(getByText('Select all'));

    expect(input.onSelectAll).toHaveBeenCalledTimes(expected.called);
  });

  it('should call onDeselect() when "Clear" button is clicked', () => {
    const props = { selected: ['image-001'] };
    const expected = { called: 1 };
    const { getByText } = setup(props);

    fireEvent.click(getByText('Clear'));

    expect(input.onDeselect).toHaveBeenCalledTimes(expected.called);
  });

  it('should call onDeleteRequest() when "Delete" button is clicked', () => {
    const props = { selected: ['image-001'] };
    const expected = { called: 1 };
    const { getByText } = setup(props);

    fireEvent.click(getByText('Delete'));

    expect(input.onDeleteRequest).toHaveBeenCalledTimes(expected.called);
  });

  it('should call onError() when "Danger" element is clicked', () => {
    const props = { error: ['error-001'] };
    const expected = { called: 1 };
    const { getByText } = setup(props);

    fireEvent.click(getByText(`${props.error.length} error`));

    expect(input.onError).toHaveBeenCalledTimes(expected.called);
  });
});
