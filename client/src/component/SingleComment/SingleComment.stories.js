import React from 'react';
import SingleComment from './SingleComment';

export default {
    title : 'SingleComment component',
    component: SingleComment,
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