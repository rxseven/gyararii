import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/common/base/Button';

const propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
};

const defaultProps = {
  checked: false
};

function Toggle({ checked, children, onToggle, ...props }) {
  return (
    <Button
      {...props}
      look={checked ? 'primary' : 'secondary'}
      onClick={onToggle}
    >
      {children}
    </Button>
  );
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
