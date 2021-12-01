import React, { useEffect, useState } from 'react';
import PaginationPageList from '../PaginationPageList';
import PaginationArrow from '../PaginationArrow';
import { getAllPost } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { GContainer } from './styled';

// eslint-disable-next-line react/prop-types
const Pagination = ({ articlePerPage, postCount, parentComponent }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const totalPostNumber = postCount;

    const pagePerPagination = 10;

    const startIndex = Math.floor((currentPage - 1) / pagePerPagination) * pagePerPagination + 1;

    const totalPageCount = Math.floor((totalPostNumber - 1) / articlePerPage) + 1;
    const totalPagiCount = Math.floor((totalPageCount - 1) / pagePerPagination) + 1;

    const currentPagi = Math.floor((currentPage - 1) / pagePerPagination) + 1;
    const pageCountInCurrentPagination = (currentPagi === totalPagiCount ?
        (totalPageCount - (currentPagi - 1) * pagePerPagination)
      : (pagePerPagination));

    const pagiFirstEnabled = (currentPagi > 1);
    const pagiPrevEnabled = (currentPage > 1);
    const pagiNextEnabled = (currentPage < totalPageCount);
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
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='<<' type='first'
                            enabled={pagiFirstEnabled}
                            parentComponent={parentComponent} />
                        <PaginationArrow
                            currentPagi={currentPagi}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='<' type='prev'
                            enabled={pagiPrevEnabled}
                            parentComponent={parentComponent} />
                        <PaginationPageList
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            start={startIndex}
                            size={pageCountInCurrentPagination}
                            parentComponent={parentComponent} />
                        <PaginationArrow
                            currentPagi={currentPagi}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='>' type='next'
                            enabled={pagiNextEnabled}
                            parentComponent={parentComponent} />
                        <PaginationArrow
                            currentPagi={currentPagi}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='>>' type='last'
                            enabled={pagiLastEnabled}
                            parentComponent={parentComponent} />
                    </tr>
                </tbody>
            </table>
        </GContainer>
    );
};

export default Pagination;