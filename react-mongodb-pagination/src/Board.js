import React, { useState } from 'react'

const constPostPerPage = 15;
const constPagePerPagination = 11;
const constTotalPostCount = 345;

/*

  state = {
    id: null,
    pressedBoardButton: false,
    pressedLoginButton: false,
    inBoardPage: null,
    inLoginPage: null
  };

*/

function getPostPerPage() { return constPostPerPage; }
function getPagePerPagination() { return constPagePerPagination; }
function getTotalPostCount() { return constTotalPostCount; }

function showBoardPage(state) {
    //const [pageState, setPageState] = useState(state.inBoardPage.page);
    const previousButton = (pe, pi, tp) => {

    };
    const pageNavigator = (pe, pi, tp) => {

    };
    const nextButton = (pe, pi, tp) => {

    };

    const postPerPage = getPostPerPage();
    const pagePerPagination = getPagePerPagination();
    const totalPostCount = getTotalPostCount();

    return (
        <div className="BoardMainCover">
            <h1>Board page</h1>
            <div className="UserInfoSpace"></div>
            <div className="Pagination">
                { previousButton(postPerPage, pagePerPagination, totalPostCount) }
                { pageNavigator(postPerPage, pagePerPagination, totalPostCount) }
                { nextButton(postPerPage, pagePerPagination, totalPostCount) }
            </div>
        </div>
    )
}

export default showBoardPage;