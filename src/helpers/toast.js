import { toast as toastify } from 'react-toastify';

function tost({ message, position = 'TOP_RIGHT', type = 'error' }) {
  return toastify[type](message, {
    position: toastify.POSITION[position]
  });
}

export default tost;
