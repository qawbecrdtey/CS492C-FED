import React from 'react';
import PaginationPageList from './PaginationPageList';
import PaginationArrow from './PaginationArrow';

// TODO: Get information about total post count from server and current page number.
const Pagination = () => {
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <PaginationArrow goto='first' enabled={paginationFirstEnabled} />
                    <PaginationArrow goto='prev' enabled={paginationPrevEnabled} />
                    <PaginationPageList start={} size='10' />
                    <PaginationArrow goto='next' enabled={paginationNextEnabled} />
                    <PaginationArrow goto='last' enabled={paginationLastEnabled} />
                </tr>
            </tbody>
        </table>
        </>
    );
};

export default Pagination;