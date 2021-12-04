import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import SingleComment from './SingleComment';

const store = {
    getState: () => {
        return {
            user : 
            {
                userList : [
                    [ 'something',
                    'dain', 
                    '1234', 
                    'A', 
                    '24', 
                    '010' ]
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
    title : 'SingleComment component',
    component: SingleComment,
    decorators: [withReduxMockStore]
};

const SingleCommentComponent = args => <SingleComment {...args}/>;

const comment = {
    content: '아이고',
    created_date: '11/30',
    postNO: 1,
    writer: 'dain',
}

export const Default = SingleCommentComponent.bind({});
Default.args = {
    key: 1,
    comment: comment,
    postNO: 1,
}

SingleCommentComponent.story = {
    name: 'SingleComment',
};