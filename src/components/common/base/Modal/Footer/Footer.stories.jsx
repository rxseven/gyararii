import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from 'stories/shared/notes';
import Footer from './index';

const title = 'Components/Common/Base/Modal/Footer';
const component = <Footer>Modal Footer</Footer>;

storiesOf(title, module).add('default', () => component, {
  notes: notes.minimal
});
