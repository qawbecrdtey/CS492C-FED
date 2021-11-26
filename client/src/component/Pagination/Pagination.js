import React from 'react';
import PaginationPageList from './PaginationPageList';
import PaginationArrow from './PaginationArrow';

// TODO: Get information about total post count from server and current page number.
const Pagination = () => {
    // TODO: get current page, user-defined article-per-page, and total page count.
    const currentPage = getCurrentPage();
    const articlePerPage = getArticlePerPage();
    const totalPageCount = getTotalPageCount();

    const pagePerPagination = 10;
    const startIndex = Math.floor((currentPage - 1) / pagePerPagination + 1);

    const paginationFirstEnabled = (currentPage > 10);
    const paginationPrevEnabled = (currentPage > 10);
    const paginationNextEnabled = (currentPage <= Math.floor((totalPageCount - 1) / articlePerPage));
    const paginationLastEnabled = (currentPage <= Math.floor((totalPageCount - 1) / articlePerPage));

    // symbol   : type
    // <<       : first
    // <        : prev
    // >        : next
    // >>       : last
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <PaginationArrow symbol='<<' type='first' enabled={paginationFirstEnabled} />
                    <PaginationArrow symbol='<' type='prev' enabled={paginationPrevEnabled} />
                    <PaginationPageList start={startIndex} size='10' currentPage={currentPage} />
                    <PaginationArrow symbol='>' type='next' enabled={paginationNextEnabled} />
                    <PaginationArrow symbol='>>' type='last' enabled={paginationLastEnabled} />
                </tr>
            </tbody>
        </table>
        </>
    );
};

export default Pagination;