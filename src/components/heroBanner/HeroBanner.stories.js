import React from 'react';
import { HeroBanner, HeroBannerLight, HeroBannerImage, HeroBannerDark } from './HeroBanner';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
 
export default {
  title: 'HeroBanner',
  component: HeroBanner,
  decorators: [withKnobs]
};

export const Default = () => {
    const title = text('Title', 'Default title');
    const button = text('Button text', 'Button')
    return (
     <HeroBanner onClick={action('button was clicked')} title={title}>
        {button}
     </HeroBanner>
    )
};

Default.story = {
    name: 'default',
};

export const Light = () => {
    const title = text('Title', 'Title');
    const button = text('Button text', 'Button');
    return (
    <HeroBannerLight onClick={action('button was clicked')} title={title}>
        {button}
    </HeroBannerLight>
    )
};

Light.story = {
    name: 'light',
};

export const Dark = () => {
    const title = text('Title', 'Title');
    const button = text('Button text', 'Button');
    return (
    <HeroBannerDark onClick={action('button was clicked')} title={title}>
        {button}
    </HeroBannerDark>
    )
};

Dark.story = {
    name: 'dark',
};

export const Image = () => {
    const title = text('Title', 'This is the title');
    return (
        <HeroBannerImage src="/cat.jpg" title={title} />
    )
};

Image.story = {
    name: 'image',
    decorators: [withInfo]
};