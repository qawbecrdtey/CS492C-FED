import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import SingleComment from './SingleComment';

const store = {
    getState: () => {
        return {
            user : 
            {
                userList: [
                    ["_id",'Writer', 'Password', 'Email', 'Age', 'Phone number'],
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
    title : 'SingleComment component',
    component: SingleComment,
    decorators: [withReduxMockStore]
};

const SingleCommentComponent = args => <SingleComment {...args}/>;

const comment_form = {
    content: "content",
    created_date : "created_date",
    postNO : 1,
    writer : "Writer"
}

export const CommentForm = SingleCommentComponent.bind({});
CommentForm.args = {
    key: 1,
    comment: comment_form,
    postNO: 1,
}

const comment_first = {
    content: "First Comment",
    created_date : "2021년 12월 06일 01시 04분",
    postNO : 1,
    writer : "dain"
}

export const First = SingleCommentComponent.bind({});
First.args = {
    key: 1,
    comment: comment_first,
    postNO: 1,
}

const comment_second = {
    content: "Second Comment",
    created_date : "2021년 12월 07일 01시 04분",
    postNO : 1,
    writer : "yumin"
}

export const Second = SingleCommentComponent.bind({});
Second.args = {
    key: 1,
    comment: comment_second,
    postNO: 1,
    isStory: true,
    onDelete: action('onDelete')
}

SingleCommentComponent.story = {
    name: 'SingleComment',
};