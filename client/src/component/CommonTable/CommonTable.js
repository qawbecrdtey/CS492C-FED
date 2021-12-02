/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TableContainer, TableHeaderColumn, HeaderItem } from './styled';
const Checkbox = props => <input type="checkbox" {...props} />;
 
const CommonTable = ({ headersName, getElement, getChecked, children }) => {
  const [sortFlag, setSortFlag] = useState([true, false, false, false, false, false]);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    getChecked(!checked);
  }

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
    getElement({
      element: e.target.innerText,
      sortFlag: sortFlag,
    });
  }

  useEffect(() => {
    setChecked(false);
    getChecked(false);
  }, [window.location.href]);
 
  return (
    <TableContainer>
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <TableHeaderColumn key={index} >
                  {index==0 
                  ? <Checkbox checked={checked} onClick={handleClick} />
                  : item ? <HeaderItem onClick={handleClick2}>{ item }</HeaderItem> : null}
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