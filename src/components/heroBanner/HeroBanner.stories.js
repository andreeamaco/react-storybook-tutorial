import React from 'react';
import HeroBanner from './HeroBanner';

export default {
  title: 'HeroBanner',
  component: HeroBanner,
};

export const Light = () => <HeroBanner />;

Light.story = {
    name: 'light',
};
