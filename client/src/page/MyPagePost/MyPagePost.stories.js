import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import MyPagePost from './MyPagePost';
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
                postList : [
                    ["619bacaa929ca700ee96d13a",100,'글1',2,3,'dain','2021년 12월 04일 16시 38분',10,'내용1',['dain','dain2']],
                    ["619bacaa929ca700ee96d13a",244,'글2',4,5,'dain','2021년 12월 02일 8시 12분',15,'내용2',['dain','dain2']]
                ],
                postPerPage: 20,
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
    title : 'MyPagePost component',
    component: MyPagePost,
    decorators: [withReduxMockStore, StoryRouter()]
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
    isStory: true,
    onClickBoard: action('onClickBoard'),
    onClickPostList: action('onClickPostList'),
    onClickMyPage: action('onClickMyPage'),
    onClickLogout: action('onClickLogout'),
    onClickDropDownMenu: action('onClickDropDownMenu'),
    onClickMenu: action('onClickMenu'),
}

MyPagePostComponent.story = {
    name: 'MyPagePost',
};