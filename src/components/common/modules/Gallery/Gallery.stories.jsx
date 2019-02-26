import React from 'react';
import LinkTo from '@storybook/addon-links/react';
import { storiesOf } from '@storybook/react';

import notes from 'stories/shared/notes';
import Footnote from 'stories/utilities/Footnote';

import View from './View/View.stories';

const title = 'Components/Common/Modules/Gallery';

storiesOf(title, module)
  .addDecorator(story => (
    <div>
      {story()}
      <Footnote>
        Use it in conjunction with its{' '}
        <LinkTo kind={View.title} story="open" title="Link to View component">
          View
        </LinkTo>{' '}
        component.
      </Footnote>
    </div>
  ))
  .addParameters({
    info: {
      text: `
        **Usage:** use it in conjunction with its <View /> component.
      `
    }
  })
  .add('default', () => <div>A container component, no view later.</div>, {
    notes: notes.minimal
  });

export default { title };
