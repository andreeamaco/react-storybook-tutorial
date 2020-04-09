import React from 'react';
import Title from './Title';

export default {
  title: 'Title',
  component: Title,
};

export const Default = () => <Title />;
export const Reverse = () => <Title reverse />;

Default.story = {
    name: 'default',
};

Reverse.story = {
    name: 'reverse',
}

