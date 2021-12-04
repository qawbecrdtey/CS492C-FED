import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import PostList from './PostList';

const store = {
    getState: () => {
        return {
            user : 
            {
                postList: [
                    ["619bacaa929ca700ee96d13a",1,'제목',2,3,'dain','2021-11-25T08:19:11.645Z',10,'내용',['dain','dain2']]
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
    decorators: [withReduxMockStore]
};

const PostListComponent = args => <PostList {...args}/>;

const getPostCount = () => {

}

export const Default = PostListComponent.bind({});
Default.args = {
    pageNO: 1,
    postPerPage: 20,
    getPostCount: getPostCount,
}

PostListComponent.story = {
    name: 'PostList',
};