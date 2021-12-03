/* eslint-disable react/prop-types */
import React from 'react';
import PaginationIndex from '../PaginationIndex';

// returns JSX of form (<div><td></td><td></td>...<td></td></div>)
const PaginationPageList = props => {
    const { currentPage, setCurrentPage, start, size, parentComponent } = props;
    let i = 0;
    let arr = [];

    while(i < size) {
        arr.push(<PaginationIndex key={i} currentPage={currentPage} setCurrentPage={setCurrentPage} pageNo={start + i} parentComponent={parentComponent}/>);
        i++;
    }
    return (<>{arr}</>);
};

export default PaginationPageList;