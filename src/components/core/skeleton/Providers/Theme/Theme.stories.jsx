import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import notes from 'stories/shared/notes';
import Theme from './index';

const { content } = mock.elements;
const title = 'Components/Core/Skeleton/Providers/Theme';
const component = <Theme>{content}</Theme>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.provider
});
