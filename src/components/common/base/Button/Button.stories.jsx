import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from './index';

const title = 'Components/Common/Base/Button';
const props = { onClick: action('onClick') };

storiesOf(title, module)
  .addParameters({
    info: {
      text: `
    **Usage:** for more information, see [Bootstrap - Buttons](https://getbootstrap.com/docs/4.1/components/buttons/).
  `
    }
  })
  .add('normal (default)', () => <Button {...props}>Normal Button</Button>)
  .add('look', () => (
    <Button {...props} look="primary">
      Primary
    </Button>
  ))
  .add('outline', () => (
    <Button {...props} outline="primary">
      Primary
    </Button>
  ))
  .add('size', () => (
    <Button {...props} look="primary" size="lg">
      Large
    </Button>
  ))
  .add('type', () => (
    <Button {...props} look="primary" type="submit">
      Submit
    </Button>
  ))
  .add('block', () => (
    <Button {...props} block look="primary">
      OK
    </Button>
  ))
  .add('disabled', () => (
    <Button {...props} isLoading look="primary">
      OK
    </Button>
  ))
  .add('with icon', () => (
    <Button {...props} icon="cloud-upload-alt" look="primary" />
  ))
  .add('with icon & text', () => (
    <Button {...props} icon="cloud-upload-alt" look="primary">
      Upload
    </Button>
  ))
  .add('with spinner', () => (
    <Button {...props} isLoading look="primary" spinner>
      Upload
    </Button>
  ))
  .add('passive', () => (
    <Button icon="cloud-upload-alt" look="primary" passive>
      Upload
    </Button>
  ));
