import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import MyLikeList from './MyLikeList';

const store = {
    getState: () => {
        return {
            user : 
            {
                myLikeList : [
                    ["619bacaa929ca700ee96d13a",80,'좋아요한글1',2,3,'dain2','2021년 12월 04일 16시 38분',10,'내용1',['dain','dain2']],
                    ["619bacaa929ca700ee96d13a",124,'좋아요한글2',4,5,'haha','2021년 12월 02일 8시 12분',15,'내용2',['dain','dain2']]
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
    title : 'MyLikeList component',
    component: MyLikeList,
    decorators: [withReduxMockStore]
};

// export const MyLikeListComponent = () => <MyLikeList />;
const MyLikeListComponent = args => <MyLikeList {...args}/>;

const getPostCount = () => {
}

export const Default = MyLikeListComponent.bind({});
Default.args = {
    pageNO: 1,
    postPerPage: 20,
    getPostCount: getPostCount,
}

MyLikeListComponent.story = {
    name: 'MyLikeList',
};