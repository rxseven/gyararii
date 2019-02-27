import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Global from './index';

const { content } = mock.elements;
const title = 'Components/Core/Skeleton/Providers/Global';
const component = <Global>{content}</Global>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.provider
});
