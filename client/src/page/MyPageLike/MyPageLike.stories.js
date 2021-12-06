import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import MyPageLike from './MyPageLike';
import StoryRouter from 'storybook-react-router';

const store = {
    getState: () => {
        return {
            user : 
            {
                postList : [
                    ["619bacaa929ca700ee96d13a",100,'글1',2,3,'dain','2021년 12월 04일 16시 38분',10,'내용1',['dain','dain2']],
                    ["619bacaa929ca700ee96d13a",244,'글2',4,5,'dain','2021년 12월 02일 8시 12분',15,'내용2',['dain','dain2']]
                ],
                postPerPage: 20,
                myLikeList : [
                    ["619bacaa929ca700ee96d13a",80,'좋아요한글1',2,3,'dain2','2021년 12월 04일 16시 38분',10,'내용1',['dain','dain2']],
                    ["619bacaa929ca700ee96d13a",124,'좋아요한글2',4,5,'haha','2021년 12월 02일 8시 12분',15,'내용2',['dain','dain2']]
                ],
                loginUser: {
                    userID: 'dain',
                    password: '1234',
                },
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
    title : 'MyPageLike component',
    component: MyPageLike,
    decorators: [withReduxMockStore, StoryRouter()]
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
    isStory: true,
    onClickBoard: action('onClickBoard'),
    onClickPostList: action('onClickPostList'),
    onClickMyPage: action('onClickMyPage'),
    onClickLogout: action('onClickLogout'),
    onClickDropDownMenu: action('onClickDropDownMenu'),
    onClickMenu: action('onClickMenu'),
}

MyPageLikeComponent.story = {
    name: 'MyPageLike',
};