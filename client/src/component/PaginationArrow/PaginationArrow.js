/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

// returns JSX of form (<td></td>)
const PaginationArrow = props => {
    const { currentPagi, currentPage, setCurrentPage, pagePerPagi, symbol, type, enabled, parentComponent } = props;
    if(enabled === false) return (<td hover={type}><p>{symbol}</p></td>);
    
    //const startIndex = currentPagi * pagePerPagi + 1;
    const getGotoPagi = (t) => {
        if(t === 'DoubleLeft') {
            return currentPagi - 1;
        }
        else if(t === 'SingleLeft') {
            return Math.floor((currentPage - 2) / pagePerPagi) + 1
        }
        else if(t === 'SingleRight') {
            return Math.floor(currentPage / pagePerPagi) + 1;
        }
        else if(t === 'DoubleRight') {
            return currentPagi + 1;
        }
        else {
            console.error(`Wrong type: ${type}`);
            return null;
        }
    };
    const gotoPagi = getGotoPagi(type);
    // console.log(`gotoPagi = ${gotoPagi}`);
    const pageNo = (() => {
        if(type === 'DoubleLeft') return gotoPagi * pagePerPagi;
        if(type === 'SingleLeft') return currentPage - 1;
        if(type === 'SingleRight') return currentPage + 1;
        if(type === 'DoubleRight') return (gotoPagi - 1) * pagePerPagi + 1;
        else return null;
    })();

    const clicked = () => {
        setCurrentPage(pageNo);
    };

    if(gotoPagi === null) return (<td type={type}><p>{symbol}</p></td>);
    
    return (
    <td key={pageNo} type={type}>
        {parentComponent == 'PostMain' ? <Link to={`/postMain/${pageNo}`} onClick={clicked}>{symbol}</Link> : null}
        {parentComponent == 'MyPagePost' ? <Link to={`/myPage/myPosts/${pageNo}`} onClick={clicked}>{symbol}</Link> : null}
        {parentComponent == 'MyPageLike' ? <Link to={`/myPage/myLikes/${pageNo}`} onClick={clicked}>{symbol}</Link> : null}
        {parentComponent == 'MyPageComment' ? <Link to={`/myPage/myComments/${pageNo}`} onClick={clicked}>{symbol}</Link> : null}
    </td>
    );
};

export default PaginationArrow;