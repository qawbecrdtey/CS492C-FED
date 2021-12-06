import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import MyPostList from './MyPostList';
import StoryRouter from 'storybook-react-router';

const store = {
    getState: () => {
        return {
            user : 
            {
                myPostList : [
                    ["619bacaa929ca700ee96d13a",100,'글1',2,3,'dain','2021년 12월 04일 16시 38분',10,'내용1',['dain','dain2']],
                    ["619bacaa929ca700ee96d13a",244,'글2',4,5,'dain','2021년 12월 02일 8시 12분',15,'내용2',['dain','dain2']]
                ],
                loginUser: {
                    userID: 'dain',
                    password: '1234',
                },
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
    title : 'MyPostList component',
    component: MyPostList,
    decorators: [withReduxMockStore, StoryRouter()]
};

// export const MyPostListComponent = () => <MyPostList />;
const MyPostListComponent = args => <MyPostList {...args}/>;

const getPostCount = () => {
}

export const Default = MyPostListComponent.bind({});
Default.args = {
    pageNO: 1,
    postPerPage: 20,
    getPostCount: getPostCount,
}

MyPostListComponent.story = {
    name: 'MyPostList',
};