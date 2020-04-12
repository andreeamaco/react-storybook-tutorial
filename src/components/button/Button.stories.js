import React from 'react';
import Button, { ButtonSuccess, ButtonDanger } from './Button';
import {ButtonBullet} from '../button/style';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const Primary = () => {
    const btnText = text('Title', 'Primary button');
    return (
    <Button onClick={action('button was clicked')}>
        {btnText}
    </Button>
    )
};

Primary.story = {
    name: 'primary',
}

export const Reverse = () => {
    const btnText = text('Title', 'Reverse button');
    return (
    <Button reverse onClick={action('button was clicked')}>
        {btnText}
    </Button>
    )
};

Reverse.story = {
    name: 'reverse',
}

export const Danger = () => {
    const btnText = text('Title', 'Danger button');
    return (
    <ButtonDanger onClick={action('button was clicked')}>
        {btnText}
    </ButtonDanger>
    )
};

Danger.story = {
    name: 'danger',
}

export const Success = () => {
    const btnText = text('Title', 'Success button');
    return (
    <ButtonSuccess onClick={action('button was clicked')}>
        {btnText}
    </ButtonSuccess>
    )
};

Success.story = {
    name: 'success',
}

export const Bullet = () => {
    return (
        <>
            <ButtonBullet onClick={action('previous button was clicked')} />
            <ButtonBullet onClick={action('next button was clicked')} />
        </>
    )
};

Bullet.story = {
    name: 'bullet',
    decorators: [story => <div style={{ width: `960px`, height: `120px`, position: `relative` }}>{story()}</div>]
}