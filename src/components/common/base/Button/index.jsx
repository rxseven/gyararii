import cx from 'classnames';
import { omit } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import styled from 'styled-components';

import Icon from 'components/common/base/Icon';
import Spinner from 'components/common/base/Spinner';

import Set from './Set';
import './Button.styles.scss';

const propTypes = {
  block: PropTypes.bool,
  children: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isLoading: PropTypes.bool,
  look: PropTypes.string,
  minimal: PropTypes.bool,
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
  isLoading: false,
  look: 'secondary',
  minimal: false,
  outline: '',
  passive: false,
  size: 'sm',
  spinner: false,
  type: 'button'
};

const Indicator = styled.span`
  align-items: center;
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 100%;
`;

const Symbol = styled.span`
  visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
`;

const Text = styled.span`
  margin-left: ${({ icon }) => (icon ? '7px' : '0')};
  visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
`;

function Button({
  block,
  children,
  icon,
  isLoading,
  look,
  minimal,
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
    restProps.role = 'button';
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
        isLoading && 'disabled'
      )}
      disabled={isLoading}
    >
      {!!icon && (
        <Symbol isLoading={isLoading && spinner}>
          <Icon icon={icon} />
        </Symbol>
      )}
      {!!children && (
        <React.Fragment>
          <If condition={isBrowser || (!minimal && isMobile)}>
            <Text icon={icon} isLoading={isLoading && spinner}>
              {children}
            </Text>
          </If>
          <Indicator isLoading={isLoading && spinner}>
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
