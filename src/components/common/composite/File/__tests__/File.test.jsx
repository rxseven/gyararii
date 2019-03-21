import { fireEvent } from 'react-testing-library';

import { factory } from 'tests/utilities';
import File from '../index';

// Arrange
const seed = { content: 'content' };
const source = {
  children: seed.content,
  id: 'file',
  onUpload: jest.fn()
};
const input = { ...seed, ...source };

// Setup
function setup(props) {
  return factory(File, source, props);
}

// Test suites
describe('<File />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render passed children correctly', () => {
    const expected = { content: input.children };
    const { component } = setup();

    expect(component).toHaveTextContent(expected.content);
  });

  it('should allow a single file to be uploaded by default', () => {
    const expected = { attribute: 'multiple' };
    const { getByLabelText } = setup();

    expect(getByLabelText('upload')).not.toHaveAttribute(expected.attribute);
  });

  it('should accept multiple files to be uploaded', () => {
    const props = { multiple: true };
    const expected = { attribute: 'multiple' };
    const { getByLabelText } = setup(props);

    expect(getByLabelText('upload')).toHaveAttribute(expected.attribute);
  });

  it('should call onUpload() when input field has changed', () => {
    const expected = { called: 1 };
    const { getByLabelText } = setup();

    fireEvent.change(getByLabelText('upload'));

    expect(input.onUpload).toHaveBeenCalledTimes(expected.called);
  });

  it('should disabled input field when loading data', () => {
    const props = { isLoading: true };
    const { getByLabelText } = setup(props);

    expect(getByLabelText('upload')).toBeDisabled();
  });
});
