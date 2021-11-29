/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TableContainer, TableHeaderColumn, HeaderButton } from './styled';
 
const CommonTable = props => {
  const { headersName, children } = props;
  const [sortFlag, setSortFlag] = useState([true, false, false, false, false, false]);
  // eslint-disable-next-line no-unused-vars
  // const handleClick = e => {
  //   props.getElement(e.target.innerText);
  // }

  const handleClick2 = e => {
    if (e.target.innerText == '글번호') {
      setSortFlag([!sortFlag[0], sortFlag[1], sortFlag[2], sortFlag[3], sortFlag[4], sortFlag[5]])
    } else if (e.target.innerText == '제목(댓글수)') {
      setSortFlag([sortFlag[0], !sortFlag[1], sortFlag[2], sortFlag[3], sortFlag[4], sortFlag[5]])
    } else if (e.target.innerText == '좋아요') {
      setSortFlag([sortFlag[0], sortFlag[1], !sortFlag[2], sortFlag[3], sortFlag[4], sortFlag[5]])
    } else if (e.target.innerText == '작성자') {
      setSortFlag([sortFlag[0], sortFlag[1], sortFlag[2], !sortFlag[3], sortFlag[4], sortFlag[5]])
    } else if (e.target.innerText == '작성 시간') {
      setSortFlag([sortFlag[0], sortFlag[1], sortFlag[2], sortFlag[3], !sortFlag[4], sortFlag[5]])
    } else if (e.target.innerText == '조회수') {
      setSortFlag([sortFlag[0], sortFlag[1], sortFlag[2], sortFlag[3], sortFlag[4], !sortFlag[5]])
    }
    props.getElement({
      element: e.target.innerText,
      sortFlag: sortFlag,
    });
  }
 
  return (
    <TableContainer>
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <TableHeaderColumn key={index} onClick={handleClick2}>
                  {item ? <HeaderButton /*onClick={handleClick}*/>{ item }</HeaderButton> : null}
                </TableHeaderColumn>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </TableContainer>
  )
}
 
export default CommonTable;