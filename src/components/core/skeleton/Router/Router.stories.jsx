import React from 'react';
import { storiesOf } from '@storybook/react';

import mock from 'stories/mock';
import Router from './index';

const { content } = mock.elements;
const title = 'Components/Core/Skeleton/Router';
const component = <Router>{content}</Router>;

storiesOf(title, module).add('default', () => component);

export default { title };
