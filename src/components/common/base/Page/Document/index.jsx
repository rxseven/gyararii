import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Document({ children }) {
  return children;
}

Document.propTypes = propTypes;

export default Document;
