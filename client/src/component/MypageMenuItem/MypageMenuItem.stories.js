import React from 'react';
import MypageMenuItem from './MypageMenuItem';

export default {
    title : 'MypageMenuItem component',
    component: MypageMenuItem,
};

const MypageMenuItemComponent = args => <MypageMenuItem {...args} />;

const menus = [
    {name: '내가 쓴 글'},
    {name: '내가 좋아요 누른 글'},
    {name: '내가 쓴 댓글'},
]

export const MyPost = MypageMenuItemComponent.bind({});
MyPost.args = {
    menu: menus[0],
    isActive: true,
}

export const MyLike = MypageMenuItemComponent.bind({});
MyLike.args = {
    menu: menus[1],
    isActive: false,
}

export const MyComment = MypageMenuItemComponent.bind({});
MyComment.args = {
    menu: menus[2],
    isActive: false,
}

MypageMenuItemComponent.story = {
    name: 'MypageMenuItem',
};