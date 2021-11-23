import React, { useEffect } from 'react';
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

  useEffect(() => {
    let body = {
        userID: _loginUser['userID']
    }
    dispatch(getMyComments(body));
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성자', '작성 시간', '조회수']}>
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