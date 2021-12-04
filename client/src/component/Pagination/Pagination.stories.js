import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Pagination from './Pagination';

const store = {
    getState: () => {
        return {
            user : 
            {
                currentPage: 1,
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
    title : 'Pagination component',
    component: Pagination,
    decorators: [withReduxMockStore]
};

const PaginationComponent = args => <Pagination {...args}/>;

export const Default = PaginationComponent.bind({});
Default.args = {
    articlePerPage: 20,
    postCount: 150,
    parentComponent: 'PostMain',
}

PaginationComponent.story = {
    name: 'Pagination',
};