import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Frame = styled(NavLink)`
  :hover {
    text-decoration: none;
  }

  &.${props => props.activeClassName} {
    cursor: default;

    &,
    :hover {
      color: ${props => (props['data-light'] ? '#fff' : '#999')};
    }
  }
`;

const propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool
};

const defaultProps = { light: false };

function Link({ children, light, ...props }) {
  return (
    <Frame {...props} activeClassName="active" data-light={light}>
      {children}
    </Frame>
  );
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
