import React from 'react';

import { Body, Document, Head } from 'components/common/base/Page';
import Layout from 'components/common/composite/Layout';

function Home() {
  return (
    <Document>
      <Head>
        <title>ギャラリー</title>
        <meta
          name="description"
          content="A simple React app for collecting photos"
        />
      </Head>
      <Body>
        <Layout>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Layout>
      </Body>
    </Document>
  );
}

export default Home;
