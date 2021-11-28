import React, { useEffect, useState } from 'react';
import PaginationPageList from '../PaginationPageList';
import PaginationArrow from '../PaginationArrow';
import { getAllPost } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GContainer } from './styled';

// eslint-disable-next-line react/prop-types
const Pagination = ({ articlePerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const _postlist = useSelector(state => state.user.postList);
    const totalPostNumber = _postlist.length;

    const pagePerPagination = 10;

    const startIndex = Math.floor((currentPage - 1) / pagePerPagination) * pagePerPagination + 1;

    const totalPageCount = Math.floor((totalPostNumber - 1) / articlePerPage) + 1;
    const totalPagiCount = Math.floor((totalPageCount - 1) / pagePerPagination) + 1;

    const currentPagi = Math.floor((currentPage - 1) / pagePerPagination) + 1;
    const pageCountInCurrentPagination = (currentPagi === totalPagiCount ? (totalPageCount - (currentPagi - 1) * pagePerPagination) : (pagePerPagination));

    const pagiFirstEnabled = (currentPagi > 1);
    const pagiPrevEnabled = (currentPagi > 1);
    const pagiNextEnabled = (currentPagi < totalPagiCount);
    const pagiLastEnabled = (currentPagi < totalPagiCount);

    useEffect(() => {
        dispatch(getAllPost());
    }, []);
    // symbol   : type
    // <<       : first
    // <        : prev
    // >        : next
    // >>       : last
    return (
        <GContainer>
            <table>
                <tbody>
                    <tr>
                        <PaginationArrow
                            currentPagi={currentPagi}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='<<' type='first'
                            enabled={pagiFirstEnabled} />
                        <PaginationArrow
                            currentPagi={currentPagi}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='<' type='prev'
                            enabled={pagiPrevEnabled} />
                        <PaginationPageList
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            start={startIndex}
                            size={pageCountInCurrentPagination} />
                        <PaginationArrow
                            currentPagi={currentPagi}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='>' type='next'
                            enabled={pagiNextEnabled} />
                        <PaginationArrow
                            currentPagi={currentPagi}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='>>' type='last'
                            enabled={pagiLastEnabled} />
                    </tr>
                </tbody>
            </table>
        </GContainer>
    );
};

export default Pagination;