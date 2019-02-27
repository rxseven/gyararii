import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Layout from './index';

const { text } = mock;
const title = 'Components/Common/Composite/Layout';
const component = <Layout>{text}</Layout>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
