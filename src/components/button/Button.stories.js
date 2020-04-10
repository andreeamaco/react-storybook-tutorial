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
    const title = text('Title', 'Button title');
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
    const title = text('Title', 'Button title');
    return (
    <Button reverse onClick={action('button was clicked')}>
        {title}
    </Button>
    )
};

Reverse.story = {
    name: 'reverse',
}

export const Danger = () => <ButtonDanger onClick={action('button was clicked')}/>;

Danger.story = {
    name: 'danger',
}

export const Success = () => <ButtonSuccess onClick={action('button was clicked')}/>;

Success.story = {
    name: 'success',
}