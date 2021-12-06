/* eslint-disable react/prop-types */
import React from 'react';
import PaginationIndex from '../PaginationIndex';

/**
 * - (10k + 1)부터 최대 10(k + 1)까지 PaginationIndex를 표시합니다.
 * - 현재 페이지를 제외한 나머지 PaginationIndex가 활성화됩니다.
 */
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