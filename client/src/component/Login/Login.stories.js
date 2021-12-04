import React from 'react';
import Login from './Login';
import { decorators } from '../../../.storybook/preview';

export default {
    title : 'Login component',
    component: Login,
    decorators: decorators,
};

export const LoginComponent = () => <Login />;

LoginComponent.story = {
    name: 'Login',
};