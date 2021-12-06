import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import PostList from './PostList';
import StoryRouter from 'storybook-react-router';

const store = {
    getState: () => {
        return {
            user : 
            {
                postList: [
                    ["619bacaa929ca700ee96d13a",1,'제목',2,3,'dain','2021-11-25T08:19:11.645Z',10,'내용',['dain','dain2']]
                ],
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
    title : 'PostList component',
    component: PostList,
    decorators: [withReduxMockStore, StoryRouter()]
};

const PostListComponent = args => <PostList {...args}/>;

const getPostCount = () => {

}

export const Default = PostListComponent.bind({});
Default.args = {
    pageNO: 1,
    postPerPage: 20,
    isStory: true,
    getPostCount: getPostCount,
    onClickCheckbox: action('onClickCheckbox'),
    onClickCheck: action('onClickCheck'),
    onSearch: action('onSearch'),
    onWrite: action('onWrite'),
    onDelete: action('onDelete'),
    onSortColumn: action('onSortColumn')
}

PostListComponent.story = {
    name: 'PostList',
};