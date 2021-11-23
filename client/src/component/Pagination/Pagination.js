import React from 'react';
import PaginationPageList from './PaginationPageList';
import PaginationArrow from './PaginationArrow';

// TODO: Get information about total post count from server and current page number.
const Pagination = () => {
    // <<   : first
    // <    : prev
    // >    : next
    // >>   : last
    const startIndex = getStartIndex();
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <PaginationArrow goto='<<' enabled={paginationFirstEnabled} />
                    <PaginationArrow goto='<' enabled={paginationPrevEnabled} />
                    <PaginationPageList start={startIndex} size='10' />
                    <PaginationArrow goto='>' enabled={paginationNextEnabled} />
                    <PaginationArrow goto='>>' enabled={paginationLastEnabled} />
                </tr>
            </tbody>
        </table>
        </>
    );
};

export default Pagination;