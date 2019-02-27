import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Grid from 'components/common/base/Grid';

const propTypes = exact({
  adaptive: PropTypes.bool,
  alignment: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string
});

const defaultProps = {
  adaptive: false,
  alignment: 'justify-content-sm-center',
  size: 'col'
};

function Layout({ adaptive, alignment, children, size }) {
  return (
    <Grid.Row alignment={alignment}>
      <Grid.Column size={adaptive ? 'col-md-10 col-lg-8' : size}>
        {children}
      </Grid.Column>
    </Grid.Row>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
