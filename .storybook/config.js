import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import requireContext from 'require-context.macro';
import { checkA11y } from '@storybook/addon-a11y';
import { configureActions } from '@storybook/addon-actions';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';
import { themes } from '@storybook/components';
import { addDecorator, configure } from '@storybook/react';

// Application styles
import '../src/styles/index.scss';

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

// Backgrounds addon
addDecorator(
  withBackgrounds([
    { default: true, name: 'Default', value: '#fff' },
    { name: 'Dark', value: '#242424' },
    { name: 'Facebook', value: '#3b5998' }
  ])
);

// Info addon
addDecorator(
  withInfo({
    header: true,
    inline: false,
    source: true,
    styles: {
      button: {
        base: {
          fontSize: '11px',
          padding: '4px 7px'
        },
        topRight: {
          borderRadius: '0 0 0 4px'
        }
      },
      header: {
        body: {
          marginBottom: '1rem'
        },
        h1: {
          color: '#007bff',
          fontSize: '18px',
          fontWeight: '400',
          marginBottom: '0.75rem'
        },
        h2: {
          color: '#999',
          fontSize: '14px',
          marginBottom: '1rem'
        }
      },
      infoBody: {
        fontSize: '14px'
      },
      infoContent: {
        borderBottom: '1px solid #eee',
        marginBottom: '1rem',
        paddingBottom: '1rem'
      },
      propTableHead: {
        fontSize: '14px',
        fontWeight: '400',
        margin: '15px 0'
      },
      source: {
        h1: {
          color: '#007bff',
          fontSize: '16px',
          fontWeight: '400',
          marginBottom: '1rem',
          marginTop: 0,
          paddingBottom: '1rem'
        }
      }
    }
  })
);

// Notes addon
addDecorator(withNotes);

// Actions addon
configureActions({
  clearOnStoryChange: true,
  depth: 10,
  limit: 50
});

// A11Y addon
addDecorator(checkA11y);

// Viewport addon
configureViewport({
  defaultViewport: 'responsive'
});

// Wrap each story within Router component
addDecorator(story => <Router>{story()}</Router>);

// Wrap each story within a container
addDecorator(story => <Wrapper>{story()}</Wrapper>);

// Import story files
const req = requireContext('../src', true, /\.stories\.jsx$/);

// Load all stories
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Configure Storybook
configure(loadStories, module);
