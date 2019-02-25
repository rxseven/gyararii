import React from 'react';
import { Link } from 'react-router-dom';

import { Body, Document, Head } from 'components/common/base/Page';
import Card from 'components/common/base/Card';
import Layout from 'components/common/composite/Layout';
import PATHS from 'constants/routes/paths';

function NotFound() {
  return (
    <Document>
      <Head>
        <title>Page not found · ギャラリー</title>
      </Head>
      <Body>
        <Layout>
          <Card>
            <Card.Body>
              <Card.Title>404</Card.Title>
              <p>This is not webpage you are looking for.</p>
              <Link to={PATHS.root}>Go back to Home page</Link>
            </Card.Body>
          </Card>
        </Layout>
      </Body>
    </Document>
  );
}

export default NotFound;
