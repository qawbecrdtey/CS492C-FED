import React from 'react';
import PostList from './PostList';

export default {
    title : 'PostList component',
    component: PostList,
};

export const PostListComponent = () => <PostList />;

PostListComponent.story = {
    name: 'PostList',
};