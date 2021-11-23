import React from 'react';

// returns JSX of form (<td></td>)
const PaginationArrow = props => {
    const { goto, enabled } = props;
    if(enabled === false) return (<td key={goto}><p>{goto}</p></td>);
    return (<td key={goto}><a href='#'>{goto}</a></td>);
};

export default PaginationArrow;