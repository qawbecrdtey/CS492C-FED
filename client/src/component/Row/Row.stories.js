import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Row from './Row';

const store = {
    getState: () => {
        return {
            user : 
            {
                userList: [
                    ["619bacaa929ca700ee96d13a",'dain', '1234', 'dain@naver.com', '24', '01012344321'],
                    ["619bacaa929ca7011196d13a",'yumin', '1234', 'yumin@naver.com', '23', '01012311321'],
                    ["619bacaa929ca7011196d13a",'asdf', '1234', 'asdf@naver.com', '24', '01011311321'],
                    ["619bacaa929ca7011196d13a",'dain2', '1234', 'asdf@naver.com', '24', '01011311321'],
                    ["619bacaa929ca7011196d13a",'haha', '1234', 'asdf@naver.com', '24', '01011311321'],
                    ["619bacaa929ca7011196d13a",'유민', '1234', 'asdf@naver.com', '24', '01011311321'],
                ]
            }
        };
    },
    subscribe: () => {},
    dispatch: action('dispatch')
};

const withReduxMockStore = (story) => (
    <Provider store={store}>{story()}</Provider>
)


export default {
    title : 'Row component',
    component: Row,
    decorators: [withReduxMockStore],
    // argTypes: { onClick: { action: 'clicked' } },
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