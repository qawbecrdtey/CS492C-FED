import React from 'react';
import MyLikeList from './MyLikeList';

export default {
    title : 'MyLikeList component',
    component: MyLikeList,
};

// export const MyLikeListComponent = () => <MyLikeList />;
const MyLikeListComponent = args => <MyLikeList {...args}/>;

const getPostCount = () => {
}

export const Default = MyLikeListComponent.bind({});
Default.args = {
    pageNO: 1,
    postPerPage: 20,
    getPostCount: getPostCount,
}

MyLikeListComponent.story = {
    name: 'MyLikeList',
};