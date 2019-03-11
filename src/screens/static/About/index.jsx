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
        <meta content="About Gyararī" name="description" />
      </Head>
      <Body>
        <Layout adaptive>
          <Card>
            <Card.Header>What is Gyararī</Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Gyararī</strong> is a simple React app for collecting
                photos. It was built from scratch using only{' '}
                <Hyperlink href="https://reactjs.org">React</Hyperlink> and{' '}
                <Hyperlink href="https://reactjs.org/docs/typechecking-with-proptypes.html">
                  PropTypes
                </Hyperlink>
                . No complex state menagement, static type checking, and UI
                library needed!
              </Card.Text>
              <Card.Text>
                <strong>Gyararī</strong> is an open-source project built and
                maintained by{' '}
                <Hyperlink href="https://www.linkedin.com/in/pongsupawat">
                  Theerawat Pongsupawat
                </Hyperlink>
                , frontend developer from Chiang Mai, Thailand.
              </Card.Text>
              <hr />
              <Card.Text>
                <strong>Gyararī</strong> or ギャラリー literally means “Gallery”
                in Japanese.
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
