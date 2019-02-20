import React from 'react';
import requireContext from 'require-context.macro';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import { addDecorator, configure } from '@storybook/react';

// Decorators
import Wrapper from './decorators/Wrapper';

// Storybook styles
import './styles.scss';

// Options addon
addDecorator(
  withOptions({
    name: 'ギャラリー',
    theme: themes.light
  })
);

// Wrap each story within a container
addDecorator(story => <Wrapper>{story()}</Wrapper>);

// Import story files
const req = requireContext('../src', true, /\.stories\.js$/);

// Load all stories
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Configure Storybook
configure(loadStories, module);
