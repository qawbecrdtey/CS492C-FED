import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Comment from './Comment';

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
    title : 'Comment component',
    component: Comment,
    decorators: [withReduxMockStore]
};

const CommentComponent = args => <Comment {...args} />;

export const Default = CommentComponent.bind({});
Default.args = {
}

CommentComponent.story = {
    name: 'Comment',
};