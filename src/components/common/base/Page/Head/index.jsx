import React from 'react';
import { Helmet } from 'react-helmet';

function Head({ children }) {
  return <Helmet>{children}</Helmet>;
}

export default Head;
