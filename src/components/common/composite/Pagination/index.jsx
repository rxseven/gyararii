import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import styled from 'styled-components';

import Button from 'components/common/base/Button';
import Spinner from 'components/common/base/Spinner';

const Frame = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  min-height: 27px;
`;

const propTypes = exact({
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isMore: PropTypes.bool,
  node: PropTypes.any.isRequired,
  onLoad: PropTypes.func.isRequired
});

const defaultProps = {
  isLoading: false,
  isMore: false
};

function Pagination({ children, isLoading, isMore, node, onLoad }) {
  function handleLoad() {
    onLoad({ mode: 'pagination' });
  }

  return (
    <Frame ref={node}>
      <Choose>
        <When condition={isLoading}>
          <Spinner />
        </When>
        <When condition={!isLoading && isMore}>
          <Button icon="image" look="outline-primary" onClick={handleLoad}>
            {children}
          </Button>
        </When>
      </Choose>
    </Frame>
  );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
