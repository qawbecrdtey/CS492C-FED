/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PaginationIndex = props => {
    const { currentPage, setCurrentPage, pageNo, parentComponent } = props;
    const clicked = () => {
        setCurrentPage(pageNo);
    };
    
    if(currentPage === pageNo) {
        return (<td key={pageNo}><p><b>{pageNo}</b></p></td>);
    }
    return (
    <td key={pageNo}>
        {parentComponent == 'PostMain' ? <Link to={`/postMain/${pageNo}`} onClick={clicked}>{pageNo}</Link> : null}
        {parentComponent == 'MyPagePost' ? <Link to={`/myPage/myPosts/${pageNo}`} onClick={clicked}>{pageNo}</Link> : null}
        {parentComponent == 'MyPageLike' ? <Link to={`/myPage/myLikes/${pageNo}`} onClick={clicked}>{pageNo}</Link> : null}
        {parentComponent == 'MyPageComment' ? <Link to={`/myPage/myComments/${pageNo}`} onClick={clicked}>{pageNo}</Link> : null}
    </td>
    );
};

export default PaginationIndex;