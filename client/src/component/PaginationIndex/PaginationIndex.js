/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PaginationIndex = props => {
    const { currentPage, setCurrentPage, pageNo } = props;
    const clicked = () => {
        setCurrentPage(pageNo);
    };
    
    if(currentPage === pageNo) {
        return (<td key={pageNo}><p><b>{pageNo}</b></p></td>);
    }
    return (
    <td key={pageNo}>
        <Link to={`/postMain/${pageNo}`} onClick={clicked}>{pageNo}</Link>
    </td>
    );
};

export default PaginationIndex;