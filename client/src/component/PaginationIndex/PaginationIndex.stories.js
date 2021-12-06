import React from 'react';
import PaginationIndex from './PaginationIndex';

export default {
    title : 'PaginationIndex component',
    component: PaginationIndex,
};

const PaginationIndexComponent = args => <PaginationIndex {...args}/>;

const setCurrentPage = () => {
};

export const Default = PaginationIndexComponent.bind({});
Default.args = {
    currentPage: 1,
    setCurrentPage: setCurrentPage,
    pageNo : 1,
    parentComponent: 'postMain',
}

PaginationIndexComponent.story = {
    name: 'PaginationIndex',
};