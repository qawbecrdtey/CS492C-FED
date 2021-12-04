import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import MyCommentList from './MyCommentList';


const store = {
    getState: () => {
        return {
            user : 
            {
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
    title : 'MyCommentList component',
    component: MyCommentList,
    decorators: [withReduxMockStore]
};

// export const MyCommentListComponent = () => <MyCommentList />;
const MyCommentListComponent = args => <MyCommentList {...args}/>;

const getPostCount = () => {
}

export const Default = MyCommentListComponent.bind({});
Default.args = {
    pageNO: 1,
    postPerPage: 20,
    getPostCount: getPostCount,
}

MyCommentListComponent.story = {
    name: 'MyCommentList',
};