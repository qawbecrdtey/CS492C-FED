import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Header from './Header';

const store = {
    getState: () => {
        return {
            user : 
            {
                loginUser: {
                    userID: 'dain',
                    password: '1234',
                },
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
    title : 'Header component',
    component: Header,
    decorators: [withReduxMockStore]
};

export const HeaderComponent = () => {
    return (
        <Header 
            isStory={true}
            onClickBoard={action('onClickBoard')}
            onClickPostList={action('onClickPostList')}
            onClickMyPage={action('onClickMyPage')}
            onClickLogout={action('onClickLogout')}
        />
    )
};

HeaderComponent.story = {
    name: 'Header',
};