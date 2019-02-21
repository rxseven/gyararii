import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import PATHS from 'constants/routes/paths';
import { Home, NotFound } from 'screens';

function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path={PATHS.root} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
