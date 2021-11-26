/* eslint-disable react/prop-types */
import React from 'react';

const PaginationIndex = props => {
    const { idx } = props;
    return (<td key={idx}><a href='#'>{idx}</a></td>);
};

export default PaginationIndex;