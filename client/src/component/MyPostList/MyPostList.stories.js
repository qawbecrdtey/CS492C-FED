import React from 'react';
import MyPostList from './MyPostList';

export default {
    title : 'MyPostList component',
    component: MyPostList,
};

// export const MyPostListComponent = () => <MyPostList />;
const MyPostListComponent = args => <MyPostList {...args}/>;

const getPostCount = () => {
}

export const Default = MyPostListComponent.bind({});
Default.args = {
    pageNO: 1,
    postPerPage: 20,
    getPostCount: getPostCount,
}

MyPostListComponent.story = {
    name: 'MyPostList',
};