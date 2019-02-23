import cx from 'classnames';
import { omit } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Icon from 'components/common/base/Icon';
import Spinner from 'components/common/base/Spinner';

import Set from './Set';

const propTypes = {
  block: PropTypes.bool,
  children: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  look: PropTypes.string,
  outline: PropTypes.string,
  passive: PropTypes.bool,
  size: PropTypes.string,
  spinner: PropTypes.bool,
  type: PropTypes.string
};

const defaultProps = {
  block: false,
  children: '',
  icon: '',
  loading: false,
  look: 'secondary',
  outline: '',
  passive: false,
  size: 'sm',
  spinner: false,
  type: 'button'
};

const Text = styled.span`
  margin-left: ${({ icon }) => (icon ? '7px' : '0')};
  visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
`;

const Symbol = styled.span`
  visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
`;

const Indicator = styled.span`
  align-items: center;
  display: ${({ loading }) => (loading ? 'flex' : 'none')};
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 100%;
`;

function Button({
  block,
  children,
  icon,
  loading,
  look,
  outline,
  passive,
  size,
  spinner,
  ...props
}) {
  const Tag = passive ? 'span' : 'button';
  let restProps = { ...props };

  // Filter unrelatd props
  if (passive) {
    restProps = omit(props, ['type']);
  }

  return (
    <Tag
      {...restProps}
      className={cx(
        'btn',
        block && 'btn-block',
        !!look && !outline && `btn-${look}`,
        `btn-${size}`,
        !!outline && `btn-outline-${outline}`,
        loading && 'disabled'
      )}
      disabled={loading}
    >
      {!!icon && (
        <Symbol loading={loading && spinner}>
          <Icon icon={icon} />
        </Symbol>
      )}
      {!!children && (
        <React.Fragment>
          <Text icon={icon} loading={loading && spinner}>
            {children}
          </Text>
          <Indicator loading={loading && spinner}>
            <Spinner color="#fff" />
          </Indicator>
        </React.Fragment>
      )}
    </Tag>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

Button.Set = Set;

export default Button;
