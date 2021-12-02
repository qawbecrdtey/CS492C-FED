/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PaginationArrow from './PaginationArrow';

export default {
    title : 'PaginationArrow component',
    component: PaginationArrow,
};

// export const PaginationArrowComponent = () => <PaginationArrow />;
const PaginationArrowComponent = args => <PaginationArrow {...args}/>;

// const [currentPage, setCurrentPage] = useState(1);
const setCurrentPage = () => {

}

export const Page1 = PaginationArrowComponent.bind({});
Page1.args = {
    currentPagi: 1,
    setCurrentPage: setCurrentPage,
    pagePerPagi: 10,
    totalPagiCount: 20,
    symbol: '<<',
    type: 'first',
    enabled: true,
    parentComponent: 'PostMain',
}

PaginationArrowComponent.story = {
    name: 'PaginationArrow',
};