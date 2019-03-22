import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { factory } from 'tests/utilities';
import Icon from '../index';

// Arrange
const context = expect.any(Object);
const source = { icon: 'home' };
const input = { ...source };

// Setup
function setup(props) {
  return factory(Icon, source, props);
}

// Test suites
describe('<Icon />', () => {
  it('should render without crashing', () => {
    setup();
  });

  it('should render "Home" icon', () => {
    const expected = { called: { icon: input.icon } };
    setup();

    expect(FontAwesomeIcon).toHaveBeenCalledWith(expected.called, context);
  });
});
