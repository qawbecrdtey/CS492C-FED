/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PaginationIndex = props => {
    const { currentPage, setCurrentPage, pageNo } = props;
    console.log(`pageNo = ${pageNo}`);
    if(currentPage === pageNo) {
        return (<td key={pageNo}><p><b>{pageNo}</b></p></td>);
    }
    
    const clicked = () => {
        console.log(`clicked from PaginationIndex.js! pageNo = ${pageNo}`);
        setCurrentPage(pageNo);
    };
    return (
    <td key={pageNo}>
        <Link to={`/postMain/${pageNo}`} onClick={clicked}>{pageNo}</Link>
    </td>
    );
};

export default PaginationIndex;