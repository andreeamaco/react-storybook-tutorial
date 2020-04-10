import React from 'react';
import { HeroBanner, HeroBannerLight, HeroBannerImage, HeroBannerDark } from './HeroBanner';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
 
export default {
  title: 'HeroBanner',
  component: HeroBanner,
};

export const Default = () => <HeroBanner onClick={action('button was clicked')}/>;

Default.story = {
    name: 'default',
};

export const Light = () => <HeroBannerLight onClick={action('button was clicked')}/>;

Light.story = {
    name: 'light',
};

export const Dark = () => <HeroBannerDark onClick={action('button was clicked')}/>;

Dark.story = {
    name: 'dark',
};

export const Image = () => (<HeroBannerImage title="This is the banner title" src="/cat.jpg"/>);

Image.story = {
    name: 'image',
    decorators: [withInfo]
};