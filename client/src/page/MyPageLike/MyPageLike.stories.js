import React from 'react';
import MyPageLike from './MyPageLike';

export default {
    title : 'MyPageLike component',
    component: MyPageLike,
};

const MyPageLikeComponent = args => <MyPageLike {...args}/>;

const match_1 = {
    params: {
        pageNO: 1,
    },
}

export const Default = MyPageLikeComponent.bind({});
Default.args = {
    match: match_1,
}

MyPageLikeComponent.story = {
    name: 'MyPageLike',
};