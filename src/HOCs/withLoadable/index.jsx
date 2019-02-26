import LoadableVisibility from 'react-loadable-visibility/react-loadable';

import Loader from 'components/common/composite/Loader';

function withLoadable(loader) {
  return LoadableVisibility({
    delay: 200,
    loader,
    loading: Loader,
    timeout: 10000
  });
}

export default withLoadable;
