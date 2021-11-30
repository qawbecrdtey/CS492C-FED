import React from 'react';
import MyPostList from './MyPostList';

export default {
    title : 'MyPostList component',
    component: MyPostList,
};

export const MyPostListComponent = () => <MyPostList />;

MyPostListComponent.story = {
    name: 'MyPostList',
};