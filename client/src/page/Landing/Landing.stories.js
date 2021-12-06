import React from 'react';
import Landing from './Landing';

export default {
    title : 'Landing component',
    component: Landing,
};

const LandingComponent = args => <Landing {...args}/>;

export const Default = LandingComponent.bind({});

LandingComponent.story = {
    name: 'Landing',
};