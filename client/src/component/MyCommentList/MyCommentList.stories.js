import React from 'react';
import MyCommentList from './MyCommentList';

export default {
    title : 'MyCommentList component',
    component: MyCommentList,
};

export const MyCommentListComponent = () => <MyCommentList />;

MyCommentListComponent.story = {
    name: 'MyCommentList',
};