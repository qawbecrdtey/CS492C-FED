/* eslint-disable react/prop-types */
import React from 'react';

// returns JSX of form (<td></td>)
const PaginationArrow = props => {
    const { symbol, type, enabled } = props;
    if(enabled === false) return (<td type={type}><p>{symbol}</p></td>);
    return (<td type={type}><a href='#'>{symbol}</a></td>);
};

export default PaginationArrow;