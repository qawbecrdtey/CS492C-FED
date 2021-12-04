import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import PostView from './PostView';

const store = {
    getState: () => {
        return {
            user : 
            {
                postList: [
                    ["619bacaa929ca700ee96d13a",1,'제목',2,3,'dain','2021-11-25T08:19:11.645Z',10,'내용',['dain','dain2']]
                ],
                loginUser: {
                    userID: 'dain',
                    password: '123444',
                }
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
    title : 'PostView component',
    component: PostView,
    decorators: [withReduxMockStore],
};

const PostViewComponent = args => <PostView {...args}/>;
const match = {
    params: {
        no: 1,
    },
}

export const Default = PostViewComponent.bind({});
Default.args = {
    match: match,
}

PostViewComponent.story = {
    name: 'PostView',
};