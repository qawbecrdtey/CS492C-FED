import React, { useEffect, useState } from 'react';
import PaginationPageList from './PaginationPageList';
import PaginationArrow from './PaginationArrow';
import { getAllPost } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    //const [articlePerPage, setArticlePerPage] = useState(15);
    const articlePerPage = 15;
    const dispatch = useDispatch();
    const _postlist = useSelector(state => state.user.postList);
    const totalPostNumber = _postlist.length();

    const pagePerPagination = 10;
    const startIndex = Math.floor((currentPage - 1) / pagePerPagination + 1);

    const pagiFirstEnabled = (currentPage > pagePerPagination);
    const pagiPrevEnabled = (currentPage > pagePerPagination);
    const pagiNextEnabled = (currentPage <= Math.floor((totalPostNumber - 1) / articlePerPage));
    const pagiLastEnabled = (currentPage <= Math.floor((totalPostNumber - 1) / articlePerPage));

    const totalPageCount = Math.floor((totalPostNumber - 1) / articlePerPage + 1);
    const currentPagi = Math.floor(currentPage / pagePerPagination + 1);
    const totalPagiCount = Math.floor((totalPageCount - 1) / pagePerPagination + 1);

    useEffect(() => {
        dispatch(getAllPost());
    }, []);
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
                    <PaginationArrow currentPagi={currentPagi} setCurrentPage={setCurrentPage} pagePerPagi={pagePerPagination} totalPagiCount={totalPagiCount} symbol='<<' type='first' enabled={pagiFirstEnabled} />
                    <PaginationArrow currentPagi={currentPagi} setCurrentPage={setCurrentPage} pagePerPagi={pagePerPagination} totalPagiCount={totalPagiCount} symbol='<' type='prev' enabled={pagiPrevEnabled} />
                    <PaginationPageList currentPage={currentPage} setCurrentPage={setCurrentPage} start={startIndex} size={pagePerPagination} currentPage={currentPage} />
                    <PaginationArrow currentPagi={currentPagi} setCurrentPage={setCurrentPage} pagePerPagi={pagePerPagination} totalPagiCount={totalPagiCount} symbol='>' type='next' enabled={pagiNextEnabled} />
                    <PaginationArrow currentPagi={currentPagi} setCurrentPage={setCurrentPage} pagePerPagi={pagePerPagination} totalPagiCount={totalPagiCount} symbol='>>' type='last' enabled={pagiLastEnabled} />
                </tr>
            </tbody>
        </table>
        </>
    );
};

export default Pagination;