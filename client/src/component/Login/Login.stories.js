/* eslint-disable no-unused-vars */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Login from './Login';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const store = {
    getState: () => {
        return {
            user : 
            {
                userList: [
                    ["619bacaa929ca700ee96d13a",'dain', '1234', 'dain@naver.com', '24', '01012344321'],
                    ["619bacaa929ca7011196d13a",'yumin', '1234', 'yumin@naver.com', '23', '01012311321'],
                    ["619bacaa929ca7011196d13a",'asdf', '1234', 'asdf@naver.com', '24', '01011311321'],
                    ["619bacaa929ca7011196d13a",'dain2', '1234', 'asdf@naver.com', '24', '01011311321'],
                    ["619bacaa929ca7011196d13a",'haha', '1234', 'asdf@naver.com', '24', '01011311321'],
                    ["619bacaa929ca7011196d13a",'유민', '1234', 'asdf@naver.com', '24', '01011311321'],
                ]
            }
        };
    },
    subscribe: () => {},
    dispatch: action('dispatch')
};

const withReduxMockStore = (story) => (
    <Provider store={store}>{story()}</Provider>
)

export default {
    title : 'Login component',
    component: Login,
    decorators: [withKnobs, withReduxMockStore] 
};
export const LoginComponent = () => {
    return (
        <Login 
            onSignin={action('onSignin')}
            onJoin={action('onJoin')}
        />
    )
}

LoginComponent.story = {
    name: 'Login',
};