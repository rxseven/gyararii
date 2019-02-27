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
        <Layout adaptive>
          <Card>
            <Card.Body>
              <Card.Title>404</Card.Title>
              <Card.Text>This is not webpage you are looking for.</Card.Text>
              <Link to={PATHS.root}>Go back to Home page</Link>
            </Card.Body>
          </Card>
        </Layout>
      </Body>
    </Document>
  );
}

export default NotFound;
