import React from 'react';
import MyLikeList from './MyLikeList';

export default {
    title : 'MyLikeList component',
    component: MyLikeList,
};

export const MyLikeListComponent = () => <MyLikeList />;

MyLikeListComponent.story = {
    name: 'MyLikeList',
};