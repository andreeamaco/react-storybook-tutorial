import React from 'react';
import Button, { ButtonSuccess, ButtonDanger } from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const Primary = () => {
    const title = text('Title', 'Primary button');
    return (
    <Button onClick={action('button was clicked')}>
        {title}
    </Button>
    )
};

Primary.story = {
    name: 'primary',
}

export const Reverse = () => {
    const title = text('Title', 'Reverse button');
    return (
    <Button reverse onClick={action('button was clicked')}>
        {title}
    </Button>
    )
};

Reverse.story = {
    name: 'reverse',
}

export const Danger = () => {
    const title = text('Title', 'Danger button');
    return (
    <ButtonDanger onClick={action('button was clicked')}>
        {title}
    </ButtonDanger>
    )
};

Danger.story = {
    name: 'danger',
}

export const Success = () => {
    const title = text('Title', 'Success button');
    return (
    <ButtonSuccess onClick={action('button was clicked')}>
        {title}
    </ButtonSuccess>
    )
};

Success.story = {
    name: 'success',
}