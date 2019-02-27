import React from 'react';

import { Body, Document, Head } from 'components/common/base/Page';
import Layout from 'components/common/composite/Layout';
import Gallery from 'components/common/modules/Gallery';

function Home() {
  return (
    <Document>
      <Head>
        <title>ギャラリー</title>
        <meta
          content="A simple React app for collecting photos"
          name="description"
        />
      </Head>
      <Body>
        <Layout>
          <Gallery />
        </Layout>
      </Body>
    </Document>
  );
}

export default Home;
