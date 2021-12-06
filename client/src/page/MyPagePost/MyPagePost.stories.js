import React from 'react';
import MyPagePost from './MyPagePost';

export default {
    title : 'MyPagePost component',
    component: MyPagePost,
};

const MyPagePostComponent = args => <MyPagePost {...args}/>;

const match_1 = {
    params: {
        pageNO: 1,
    },
}

export const Default = MyPagePostComponent.bind({});
Default.args = {
    match: match_1,
}

MyPagePostComponent.story = {
    name: 'MyPagePost',
};