import React from 'react';

import { Body, Document, Head } from 'components/common/base/Page';
import Card from 'components/common/base/Card';
import Hyperlink from 'components/common/base/Hyperlink';
import Layout from 'components/common/composite/Layout';

function About() {
  return (
    <Document>
      <Head>
        <title>About · ギャラリー</title>
        <meta content="About Gyararii" name="description" />
      </Head>
      <Body>
        <Layout adaptive>
          <Card>
            <Card.Header>What is Gyararii</Card.Header>
            <Card.Body>
              <Card.Text>
                Gyararii is a simple React app for collecting photos.
              </Card.Text>
              <Card.Text>
                It is an open-source project maintained by Theerawat
                Pongsupawat, frontend developer from Chiang Mai, Thailand.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Licenses</Card.Header>
            <Card.Body>
              <Card.Text>
                The content of this project itself is licensed under the{' '}
                <Hyperlink href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                  Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
                  International license
                </Hyperlink>
                , and the underlying source code is licensed under the{' '}
                <Hyperlink href="https://www.gnu.org/licenses/agpl-3.0">
                  GNU AGPLv3 license
                </Hyperlink>
                .
              </Card.Text>
            </Card.Body>
          </Card>
        </Layout>
      </Body>
    </Document>
  );
}

export default About;