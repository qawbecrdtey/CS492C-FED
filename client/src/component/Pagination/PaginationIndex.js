/* eslint-disable react/prop-types */
import React from 'react';

const PaginationIndex = props => {
    const { currentPage, setCurrentPage, pageNo } = props;
    if(currentPage === pageNo) {
        return (<td key={pageNo}><p><b>{pageNo}</b></p></td>);
    }
    // TODO: implement clicked.
    const clicked = () => {
        
    };
    return (
    <td key={pageNo}>
        <Link to={`/Main/${pageNo}`} onClick={clicked}>{pageNo}</Link>
    </td>
    );
};

export default PaginationIndex;