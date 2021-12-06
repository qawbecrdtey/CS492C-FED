import React from 'react';
import MyPageComment from './MyPageComment';

export default {
    title : 'MyPageComment component',
    component: MyPageComment,
};

const MyPageCommentComponent = args => <MyPageComment {...args}/>;

const match_1 = {
    params: {
        pageNO: 1,
    },
}

export const Default = MyPageCommentComponent.bind({});
Default.args = {
    match: match_1,
}

MyPageCommentComponent.story = {
    name: 'MyPageComment',
};