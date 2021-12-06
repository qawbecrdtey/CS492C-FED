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

export const CommentComponent = () => {
    return (
        <Comment 
            postNO={245}
            isStory={true}
            _onSubmit={action('onSubmit')}
        />
    )
}

CommentComponent.story = {
    name: 'Comment',
};