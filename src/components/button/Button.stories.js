import React from 'react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonSuccess, ButtonDanger } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button handleClick={action('button clicked')}/>;

Primary.story = {
    name: 'primary',
}

export const Danger = () => <ButtonDanger />;

Danger.story = {
    name: 'danger',
}

export const Success = () => <ButtonSuccess />;

Success.story = {
    name: 'success',
}