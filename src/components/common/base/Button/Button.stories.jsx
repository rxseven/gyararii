import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from './index';

const title = 'Components/Common/Base/Button';
const actions = { onClick: action('onClick') };

storiesOf(title, module)
  .addParameters({
    info: {
      text: `
    **Usage:** for more information, see [Bootstrap - Buttons](https://getbootstrap.com/docs/4.1/components/buttons/).
  `
    }
  })
  .add('normal (default)', () => <Button {...actions}>Normal Button</Button>)
  .add('look', () => (
    <Button {...actions} look="primary">
      Primary
    </Button>
  ))
  .add('outline', () => (
    <Button {...actions} outline="primary">
      Primary
    </Button>
  ))
  .add('size', () => (
    <Button {...actions} look="primary" size="lg">
      Large
    </Button>
  ))
  .add('type', () => (
    <Button {...actions} look="primary" type="submit">
      Submit
    </Button>
  ))
  .add('block', () => (
    <Button {...actions} block look="primary">
      OK
    </Button>
  ))
  .add('disabled', () => (
    <Button {...actions} loading look="primary">
      OK
    </Button>
  ))
  .add('with icon', () => (
    <Button {...actions} icon="cloud-upload-alt" look="primary" />
  ))
  .add('with icon & text', () => (
    <Button {...actions} icon="cloud-upload-alt" look="primary">
      Upload
    </Button>
  ))
  .add('with spinner', () => (
    <Button {...actions} loading look="primary" spinner>
      Upload
    </Button>
  ))
  .add('passive', () => (
    <Button icon="cloud-upload-alt" look="primary" passive>
      Upload
    </Button>
  ));
