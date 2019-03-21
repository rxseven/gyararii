import { fireEvent } from 'react-testing-library';

import { factory } from 'tests/utilities';
import Close from '../index';

// Arrange
const source = { closeToast: jest.fn() };

// Setup
function setup(props) {
  return factory(Close, source, props);
}

// Test suites
describe('<Notification.Close />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should call closeToast() when the close button is clicked', () => {
    const expected = { called: 1 };
    const { getByText } = setup();

    fireEvent.click(getByText('×'));

    expect(source.closeToast).toHaveBeenCalledTimes(expected.called);
  });
});
