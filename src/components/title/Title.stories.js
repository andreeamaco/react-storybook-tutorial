import React from 'react';
import Title from './Title';
import { backgrounds} from '../../utilities';

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
    decorators: [story => <div style={{ background: `${backgrounds.info800}` }}>{story()}</div>],
}

