import React from 'react';
import Login from './Login';

export default {
    title : 'Login component',
    component: Login,
};

export const LoginComponent = () => <Login />;

LoginComponent.story = {
    name: 'Login',
};