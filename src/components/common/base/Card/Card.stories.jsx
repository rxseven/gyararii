import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import Card from './index';

const { text } = mock;
const title = 'Components/Common/Base/Card';

storiesOf(title, module)
  .add('default', () => <Card>{text}</Card>)
  .add('alignment', () => <Card alignment="right">{text}</Card>)
  .add('background', () => (
    <Card background="primary" color="white">
      {text}
    </Card>
  ))
  .add('end', () => (
    <div>
      <Card end>{text}</Card>
      <p>Next element</p>
    </div>
  ))
  .add('margin-bottom', () => (
    <div>
      <Card margin="4">{text}</Card>
      <p>Next element</p>
    </div>
  ))
  .add('assembled', () => (
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  ));
