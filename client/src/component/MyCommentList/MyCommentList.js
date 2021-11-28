import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import { getMyComments } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
import MyCommentRow from '../MyCommentRow';
 
// eslint-disable-next-line react/prop-types
const MyCommentList = () => {
  const dispatch = useDispatch();
  const _myCommentList = useSelector(state => state.user.myCommentList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const sorted_myCommentList = [..._myCommentList];

  const [element, setElement] = useState('글번호');

  sorted_myCommentList.sort(function(a,b) {
    if (element == '글번호') {
      if(a[1] > b[1]) return -1;
      if(a[1] == b[1]) return 0;
      if(a[1] < b[1]) return 1;
    } else if (element == '제목(댓글수)') {
      return a[2].localeCompare(b[2]);
    } else if (element == '좋아요') {
      if(a[4] > b[4]) return -1;
      if(a[4] == b[4]) return 0;
      if(a[4] < b[4]) return 1;
    } else if (element == '작성자') {
      return a[5].localeCompare(b[5])
    } else if (element == '작성 시간') {
      if(a[6] > b[6]) return -1;
      if(a[6] == b[6]) return 0;
      if(a[6] < b[6]) return 1;
    } else if (element == '조회수') {
      if(a[7] > b[7]) return -1;
      if(a[7] == b[7]) return 0;
      if(a[7] < b[7]) return 1;
    }
  });

  useEffect(() => {
    let body = {
        userID: _loginUser['userID']
    }
    dispatch(getMyComments(body));
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성자', '작성 시간', '조회수']} getElement={setElement}>
        {
          _myCommentList ? _myCommentList.map((char, index) => {
              return (
                <MyCommentRow key={index} comment={char}/>
              )
          }) : null
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyCommentList;