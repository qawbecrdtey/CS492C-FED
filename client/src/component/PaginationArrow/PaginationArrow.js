/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * - 현재 페이지를 빠르게 이동할 수 있도록 하는 컴포넌트입니다.
 * - << 버튼을 누르면 이전 Pagination의 가장 큰 번호를 가지는 페이지로 이동합니다.
 * - < 버튼을 누르면 이전 페이지로 이동합니다.
 * - > 버튼을 누르면 다음 페이지로 이동한다.
 * - >> 버튼을 누르면 다음 Pagination의 가장 작은 번호를 가지는 페이지로 이동합니다.
 * - 각 Arrow에 해당하는 페이지가 존재하지 않으면 이동하지 비활성화되어 있습니다.
 */
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