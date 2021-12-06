import React from 'react';
import PostMain from './PostMain';

export default {
    title : 'PostMain component',
    component: PostMain,
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
}

PostMainComponent.story = {
    name: 'PostMain',
};