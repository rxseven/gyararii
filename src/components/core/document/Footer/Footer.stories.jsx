import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './index';

const title = 'Components/Core/Document/Footer';
const component = <Footer />;

storiesOf(title, module).add('default', () => component);
