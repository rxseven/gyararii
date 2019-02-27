import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Alert from 'components/common/base/Alert';

const propTypes = exact({
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDismiss: PropTypes.func.isRequired
});

function Error({ error, onDismiss }) {
  return (
    <If condition={error.length > 0}>
      {error.map(message => (
        <Alert key={`key-${message}`} onDismiss={onDismiss}>
          {message}
        </Alert>
      ))}
    </If>
  );
}

Error.propTypes = propTypes;

export default Error;
