/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PaginationIndex = props => {
    const { currentPage, setCurrentPage, pageNo } = props;
    if(currentPage === pageNo) {
        return (<td key={pageNo}><p><b>{pageNo}</b></p></td>);
    }

    const clicked = () => {
        setCurrentPage(pageNo);
    };
    console.log(`pageNo = ${pageNo}`);
    return (
    <td key={pageNo}>
        <Link to={`/postMain/${pageNo}`} onClick={clicked}>{pageNo}</Link>
    </td>
    );
};

export default PaginationIndex;