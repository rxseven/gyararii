import React from 'react';
import { storiesOf } from '@storybook/react';

import Head from './index';

const title = 'Components/Common/Base/Page/Head';
const component = (
  <Head>
    <title>Document Title</title>
    <meta name="description" content="Define a description of a web page" />
  </Head>
);

storiesOf(title, module).add('default', () => component, {
  notes: {
    markdown: `**No view layer** - This component will manage all of changes to the document head. It takes plain HTML tags and outputs plain HTML tags. For more information, see [rect-helmet](https://github.com/nfl/react-helmet).
    `
  }
});
