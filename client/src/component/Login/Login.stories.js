import React from 'react';
import Login from './Login';

export default {
    title : 'login component',
    component: Login,
};

export const LoginComponent = () => <Login />;

LoginComponent.story = {
    name: 'Login',
};