import React from 'react';
import ReactTooltip from 'react-tooltip';

function Tooltip(props) {
  return <ReactTooltip {...props} effect="solid" place="top" />;
}

export default Tooltip;
