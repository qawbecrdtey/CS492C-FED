import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import PostWrite from './PostWrite';


const store = {
    getState: () => {
        return {
            user : 
            {
                loginUser: {
                    userID: 'dain',
                    password: '123444',
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
    title : 'PostWrite component',
    component: PostWrite,
    decorators: [withReduxMockStore]
};

const PostWriteComponent = args => <PostWrite {...args}/>;

const match_1 = {
    params: {
        pageNO: 1,
    },
}

export const Default = PostWriteComponent.bind({});
Default.args = {
    match: match_1,
}

PostWriteComponent.story = {
    name: 'PostWrite',
};