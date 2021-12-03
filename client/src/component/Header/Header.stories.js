import React from 'react';
import Header from './Header';

export default {
    title : 'Header component',
    component: Header,
};

export const HeaderComponent = () => <Header />;

HeaderComponent.story = {
    name: 'Header',
};