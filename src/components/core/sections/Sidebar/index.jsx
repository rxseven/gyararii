import React from 'react';

import Menu from 'components/core/navigation/Menu';
import withContext from 'HOCs/withContext';

function Sidebar(props) {
  const { context } = props;
  const { actions, state } = context;
  return (
    <Menu
      isOpen={state.isMenu}
      onClose={actions.menu.onClose}
      onChange={actions.menu.onChange}
    />
  );
}

export default withContext(Sidebar);
