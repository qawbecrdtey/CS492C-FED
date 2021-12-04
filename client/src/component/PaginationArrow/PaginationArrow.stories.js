/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PaginationArrow from './PaginationArrow';

export default {
    title : 'PaginationArrow component',
    component: PaginationArrow,
};

const PaginationArrowComponent = args => <PaginationArrow {...args}/>;

const setCurrentPage = () => {
};

export const LeftDoubleArrow = PaginationArrowComponent.bind({});
LeftDoubleArrow.args = {
    currentPagi: 1,
    setCurrentPage: setCurrentPage,
    pagePerPagi: 10,
    totalPagiCount: 20,
    symbol: '<<',
    type: 'first',
    enabled: true,
    parentComponent: 'PostMain',
}
export const RightDoubleArrow = PaginationArrowComponent.bind({});
RightDoubleArrow.args = {
    currentPagi: 1,
    setCurrentPage: setCurrentPage,
    pagePerPagi: 10,
    totalPagiCount: 20,
    symbol: '>>',
    type: 'first',
    enabled: true,
    parentComponent: 'PostMain',
}
export const LeftArrow = PaginationArrowComponent.bind({});
LeftArrow.args = {
    currentPagi: 1,
    setCurrentPage: setCurrentPage,
    pagePerPagi: 10,
    totalPagiCount: 20,
    symbol: '<',
    type: 'first',
    enabled: true,
    parentComponent: 'PostMain',
}
export const RightArrow = PaginationArrowComponent.bind({});
RightArrow.args = {
    currentPagi: 1,
    setCurrentPage: setCurrentPage,
    pagePerPagi: 10,
    totalPagiCount: 20,
    symbol: '>',
    type: 'first',
    enabled: true,
    parentComponent: 'PostMain',
}

PaginationArrowComponent.story = {
    name: 'PaginationArrow',
};