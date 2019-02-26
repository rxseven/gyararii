import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Grid from 'components/common/base/Grid';

const propTypes = exact({
  alignment: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string
});

const defaultProps = {
  alignment: 'justify-content-sm-center',
  size: 'col'
};

function Layout({ alignment, children, size }) {
  return (
    <Grid.Row alignment={alignment}>
      <Grid.Column size={size}>{children}</Grid.Column>
    </Grid.Row>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
