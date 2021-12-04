import React from 'react';
import Triangle from './Triangle';

export default {
    title : 'Triangle component',
    component: Triangle,
};

export const TriangleComponent = () => <Triangle />;

TriangleComponent.story = {
    name: 'Triangle',
};