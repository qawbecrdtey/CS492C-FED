import React from 'react';
import Row from './Row';

export default {
    title : 'Row component',
    component: Row,
};

const RowComponent = args => <Row {...args}/>;

const add = () => {
}
const del = () => {
}

export const Default = RowComponent.bind({});
Default.args = {
    postNO: 1,
    title: '제목',
    no_comments: 3,
    likes: 5,
    userID: 'dain',
    created_date: '11/30',
    views: 8,
    mypage: false,
    add: add,
    del: del,
    isAllChecked: false,
}


RowComponent.story = {
    name: 'Row',
};