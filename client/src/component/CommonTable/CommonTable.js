/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TableContainer, TableHeaderColumn, HeaderItem } from './styled';
const Checkbox = props => <input type="checkbox" {...props} />;
import PropTypes from 'prop-types';

/**
 * - postMain 및 MyPage에서 사용됩니다.
 */
 
const CommonTable = ({ headersName, getElement, getChecked, children, mypage, onClickCheckbox, isStory, onSortColumn }) => {
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

  console.log(mypage);
 
  return (
    <TableContainer>
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <TableHeaderColumn key={index} >
                  {index==0 && !mypage
                  ? <Checkbox checked={checked} onChange={handleClick} onClick={onClickCheckbox} /> 
                  : !item ? null : 
                    isStory ? <HeaderItem onClick={onSortColumn}>{ item }</HeaderItem>
                          : <HeaderItem onClick={handleClick2}>{ item }</HeaderItem>}
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

CommonTable.propTypes = {
  /**
   * 목록 column의 이름 List입니다. 
   */
  headersName: PropTypes.array,
  /**
   * column을 클릭하면 해당 column의 이름을 element로써 상위 컴포넌트에 전달하여 정렬할때 사용할 수 있게 합니다. 
   */
  getElement: PropTypes.object,
   /**
   * 전체선택/해제할 수 있는 체크박스 클릭 시 클릭 여부를 getChecked를 통해 상위 컴포넌트에 전달합니다.
   */
  getChecked: PropTypes.bool,
  /**
   * 각 Row를 children으로 받아서 렌더링합니다.
   */
  children: PropTypes.object,
   /**
   * props로 상위 컴포넌트가 mypage인지 아닌지를 받아와서 체크박스를 선택적으로 보여줍니다.
   */
  mypage: PropTypes.bool,
};
 
export default CommonTable;