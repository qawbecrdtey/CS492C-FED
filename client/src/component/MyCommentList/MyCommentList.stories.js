import React from 'react';
import MyCommentList from './MyCommentList';

export default {
    title : 'MyCommentList component',
    component: MyCommentList,
};

// export const MyCommentListComponent = () => <MyCommentList />;
const MyCommentListComponent = args => <MyCommentList {...args}/>;

const getPostCount = () => {
}

export const postperpage20 = MyCommentListComponent.bind({});
postperpage20.args = {
    pageNO: 1,
    postPerPage: 20,
    getPostCount: getPostCount,
}

MyCommentListComponent.story = {
    name: 'MyCommentList',
};