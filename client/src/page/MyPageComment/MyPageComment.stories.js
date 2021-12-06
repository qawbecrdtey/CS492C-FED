import React from 'react';
import { action } from '@storybook/addon-actions';
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
    isStory: true,
    onClickBoard: action('onClickBoard'),
    onClickPostList: action('onClickPostList'),
    onClickMyPage: action('onClickMyPage'),
    onClickLogout: action('onClickLogout'),
    onClickDropDownMenu: action('onClickDropDownMenu'),
    onClickMenu: action('onClickMenu'),
}

MyPageCommentComponent.story = {
    name: 'MyPageComment',
};