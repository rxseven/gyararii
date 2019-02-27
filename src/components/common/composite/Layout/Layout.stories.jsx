import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/common/base/Grid';
import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Layout from './index';

const { text } = mock;
const title = 'Components/Common/Composite/Layout';
const props = { children: text };

storiesOf(title, module)
  .addDecorator(story => <Grid.Container>{story()}</Grid.Container>)
  .add('default', () => <Layout {...props} />, {
    notes: notes.minimal
  })
  .add('alignment & size', () => (
    <Layout {...props} alignment="justify-content-end" size="col-sm-6" />
  ));
