import React from 'react';
import PostMain from './PostMain';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

export default {
    title : 'PostMain component',
    component: PostMain,
    decorators: [StoryRouter()]
};

const PostMainComponent = args => <PostMain {...args}/>;

const match_1 = {
    params: {
        pageNO: 1,
    },
}

export const Default = PostMainComponent.bind({});
Default.args = {
    match: match_1,
    isStory: true, 
    onClickBoard: action('onClickBoard'),
    onClickPostList: action('onClickPostList'),
    onClickMyPage: action('onClickMyPage'),
    onClickLogout: action('onClickLogout'),
    onClickDropDownMenu: action('onClickDropDownMenu')
}

PostMainComponent.story = {
    name: 'PostMain',
};