import React, { useEffect } from 'react';
import PaginationPageList from '../PaginationPageList';
import PaginationArrow from '../PaginationArrow';
import { getAllPost, updateCurrentPage } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GContainer } from './styled';

/**
 * - 게시물이 있는 페이지를 여러 개로 나누고 번호를 이용하여 각 게시물 페이지에
     접근이 용이하게 하는 컴포넌트입니다.
 * - 이동 가능한 페이지 번호를 한번에 (10k + 1)부터 최대 10(k + 1)까지 화면에 표시합니다.
 * - 화살표를 누르면 화살표가 뜻하는 곳으로 이동합니다.
 * - 번호를 누르게 되면 해당 번호가 나타내는 페이지로 이동합니다.
 */
// eslint-disable-next-line react/prop-types
const Pagination = ({ articlePerPage, postCount, parentComponent }) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.user.currentPage);
    const setCurrentPage = (idx) => {
        dispatch(updateCurrentPage(idx));
    };
    const totalPostNumber = postCount;

    const pagePerPagination = 10;

    const startIndex = ((totalPostNumber === 0) ? 1 : (Math.floor((currentPage - 1) / pagePerPagination) * pagePerPagination + 1));

    const totalPageCount = ((totalPostNumber === 0) ? 1 : (Math.floor((totalPostNumber - 1) / articlePerPage) + 1));
    const totalPagiCount = ((totalPostNumber === 0) ? 1 : (Math.floor((totalPageCount - 1) / pagePerPagination) + 1));

    const currentPagi = ((totalPostNumber === 0) ? 1 : (Math.floor((currentPage - 1) / pagePerPagination) + 1));
    const pageCountInCurrentPagination = ((totalPostNumber === 0) ? 1 :
        ((currentPagi === totalPagiCount ?
            (totalPageCount - (currentPagi - 1) * pagePerPagination)
          : (pagePerPagination))));

    const pagiDoubleLeftEnabled = (currentPagi > 1);
    const pagiSingleLeftEnabled = (currentPage > 1);
    const pagiSingleRightEnabled = (currentPage < totalPageCount);
    const pagiDoubleRightEnabled = (currentPagi < totalPagiCount);

    useEffect(() => {
        dispatch(getAllPost());
    }, []);
    // symbol   : type
    // <<       : DoubleLeft
    // <        : SingleLeft
    // >        : SingleRight
    // >>       : DoubleRight
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
                            symbol='<<' type='DoubleLeft'
                            enabled={pagiDoubleLeftEnabled}
                            parentComponent={parentComponent} />
                        <PaginationArrow
                            currentPagi={currentPagi}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='<' type='SingleLeft'
                            enabled={pagiSingleLeftEnabled}
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
                            symbol='>' type='SingleRight'
                            enabled={pagiSingleRightEnabled}
                            parentComponent={parentComponent} />
                        <PaginationArrow
                            currentPagi={currentPagi}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagePerPagi={pagePerPagination}
                            totalPagiCount={totalPagiCount}
                            symbol='>>' type='DoubleRight'
                            enabled={pagiDoubleRightEnabled}
                            parentComponent={parentComponent} />
                    </tr>
                </tbody>
            </table>
        </GContainer>
    );
};

export default Pagination;