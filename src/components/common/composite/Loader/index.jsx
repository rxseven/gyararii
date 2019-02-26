import React from 'react';
import styled from 'styled-components';

import { Body, Document, Head } from 'components/common/base/Page';
import Button from 'components/common/base/Button';
import Card from 'components/common/base/Card';
import Spinner from 'components/common/base/Spinner';
import Layout from 'components/common/composite/Layout';

const Indicator = styled.div`
  text-align: center;
`;

const Message = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  font-size: 0.75rem;
  padding-top: 1rem;
  text-align: center;
`;

function Loader(props) {
  const { error, pastDelay, timedOut } = props;
  let content = null;

  switch (true) {
    // When the loader has errored
    case error:
      content = (
        <Card>
          <Card.Header>Sorry</Card.Header>
          <Card.Body>
            <Card.Text>
              Something went wrong, please reload a webpage.
            </Card.Text>
            <Button
              id="loader-reload"
              look="primary"
              onClick={() => window.location.reload()}
            >
              Reload
            </Button>
          </Card.Body>
        </Card>
      );
      break;

    // When the loader has taken longer than the timeout
    case timedOut:
      content = (
        <Indicator>
          <Spinner />
          <Message>
            <p>Please take a moment</p>
          </Message>
        </Indicator>
      );
      break;

    // When the loader has taken longer than the delay
    case pastDelay:
      content = (
        <Indicator>
          <Spinner />
        </Indicator>
      );
      break;

    // When the loader has just started
    default:
      content = null;
  }

  // Return content if any
  if (content) {
    return (
      <Document>
        <Head>
          <title>ギャラリー</title>
        </Head>
        <Body>
          <Layout adaptive>{content}</Layout>
        </Body>
      </Document>
    );
  }

  // Return nothing
  return content;
}

export default Loader;
