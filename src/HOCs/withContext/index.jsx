import React from 'react';

import { Context } from 'components/core/skeleton/Providers/Global';

function withContext(WrappedComponent) {
  return function HOC(props) {
    return (
      <Context.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </Context.Consumer>
    );
  };
}

export default withContext;
