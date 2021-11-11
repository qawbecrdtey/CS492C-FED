import React from 'react'

const constPostPerPage = 15;
const constPagePerPagination = 10;
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
    const prevButton = (pe, pi, tp, page) => {
      if(page <= pi) {
        return (<button disabled="disabled">prev</button>);
      }
      let modifiedState = state;
      modifiedState.inBoardPage.page--;
      return (<button onClick={() => showBoardPage(modifiedState)}>prev</button>);
    };
    const pageNavigator = (pe, pi, tp, page) => {
    };
    const nextButton = (pe, pi, tp, page) => {
      const lastPage = Math.floor((tp - 1) / pe) + 1;
      const paginationCount = Math.floor((lastPage - 1) / pi) + 1;
      if(page >= (paginationCount - 1) * pi) {
        return (<button disabled="disabled">next</button>);
      }
      let modifiedState = state;
      modifiedState.inBoardPage++;
      return (<button onClick={() => showBoardPage(modifiedState)}>next</button>);

    };

    const postPerPage = getPostPerPage();
    const pagePerPagination = getPagePerPagination();
    const totalPostCount = getTotalPostCount();

    return (
        <div className="BoardMainCover">
            <h1>Board page</h1>
            <div className="UserInfoSpace"></div>
            <div className="Pagination">
                { prevButton(postPerPage, pagePerPagination, totalPostCount, state.inBoardPage.page) }
                { pageNavigator(postPerPage, pagePerPagination, totalPostCount, state.inBoardPage.page) }
                { nextButton(postPerPage, pagePerPagination, totalPostCount, state.inBoardPage.page) }
            </div>
        </div>
    )
}

export default showBoardPage;