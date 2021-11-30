import React from 'react';
import MyCommentRow from './MyCommentRow';

export default {
    title : 'MyCommentRow component',
    component: MyCommentRow,
};

const MyCommentRowComponent = args => <MyCommentRow {...args}/>;

const comment = ['61a236c626f2aca75e775724', 'dain', '히히', 14, '2021-11-27T13:46:46.348Z', 0];

export const Default = MyCommentRowComponent.bind({});
Default.args = {
    comment: comment,
}

MyCommentRowComponent.story = {
    name: 'MyCommentRow',
};