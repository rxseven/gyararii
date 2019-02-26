import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from 'components/common/base/Button';

const Input = styled.input`
  &[type='file'] {
    visibility: hidden;
    position: absolute;
  }
`;

const Label = styled.label`
  margin-bottom: 0;
`;

const propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  multiple: PropTypes.bool,
  onUpload: PropTypes.func.isRequired,
  spinner: PropTypes.bool
};

const defaultProps = {
  isLoading: false,
  multiple: false,
  spinner: false
};

function File({ children, id, isLoading, multiple, onUpload, ...props }) {
  return (
    <Label htmlFor={id}>
      <Button {...props} isLoading={isLoading} look="primary" passive>
        {children}
      </Button>
      <Input
        disabled={isLoading}
        id={id}
        multiple={multiple}
        onChange={onUpload}
        type="file"
      />
    </Label>
  );
}

File.propTypes = propTypes;
File.defaultProps = defaultProps;

export default File;
