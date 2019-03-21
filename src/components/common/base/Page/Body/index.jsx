import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const propTypes = exact({
  children: PropTypes.node.isRequired
});

function Body({ children }) {
  return children;
}

Body.propTypes = propTypes;

export default Body;
