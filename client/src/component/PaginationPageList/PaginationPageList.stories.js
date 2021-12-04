import React from 'react';
import PaginationPageList from './PaginationPageList';

export default {
    title : 'PaginationPageList component',
    component: PaginationPageList,
};

const PaginationPageListComponent = args => <PaginationPageList {...args}/>;

const setCurrentPage = () => {
};

export const Default = PaginationPageListComponent.bind({});
Default.args = {
    currentPage:1,
    setCurrentPage: setCurrentPage,
    start: 1,
    size: 10,
    parentComponent: 'postMain',
}

PaginationPageListComponent.story = {
    name: 'PaginationPageList',
};