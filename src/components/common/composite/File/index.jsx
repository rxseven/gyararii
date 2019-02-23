import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from 'components/common/base/Button';

const Label = styled.label`
  margin-bottom: 0;
`;

const Input = styled.input`
  &[type='file'] {
    visibility: hidden;
    position: absolute;
  }
`;

const propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  spinner: PropTypes.bool
};

const defaultProps = {
  loading: false,
  multiple: false,
  spinner: false
};

function File({ children, id, loading, multiple, onChange, ...props }) {
  return (
    <Label htmlFor={id}>
      <Button {...props} loading={loading} look="primary" passive>
        {children}
      </Button>
      <Input
        disabled={loading}
        id={id}
        multiple={multiple}
        onChange={onChange}
        type="file"
      />
    </Label>
  );
}

File.propTypes = propTypes;
File.defaultProps = defaultProps;

export default File;
