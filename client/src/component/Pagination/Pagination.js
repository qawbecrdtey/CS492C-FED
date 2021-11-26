import React, { useEffect } from 'react';
import PaginationPageList from './PaginationPageList';
import PaginationArrow from './PaginationArrow';
import { getAllPost } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

// TODO: Get information about total post count from server and current page number.
const Pagination = () => {
    // TODO: Implement getPaginationInfo.
    const dispatch = useDispatch();
    const _postlist = useSelector(state => state.user.postList);
    const totalPostNumber = _postlist.length();
    const { currentPage, articlePerPage, totalPageCount } = getPaginationInfo();

    const pagePerPagination = 10;
    const startIndex = Math.floor((currentPage - 1) / pagePerPagination + 1);

    const paginationFirstEnabled = (currentPage > 10);
    const paginationPrevEnabled = (currentPage > 10);
    const paginationNextEnabled = (currentPage <= Math.floor((totalPageCount - 1) / articlePerPage));
    const paginationLastEnabled = (currentPage <= Math.floor((totalPageCount - 1) / articlePerPage));

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