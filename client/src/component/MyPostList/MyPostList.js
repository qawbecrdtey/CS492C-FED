import React, { useEffect } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getMyPost } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
 
const MyPostList = () => {
  const dispatch = useDispatch();
  const _mypostList = useSelector(state => state.user.myPostList);
  const _loginUser = useSelector(state => state.user.loginUser);

  useEffect(() => {
    let body = {
        userID: _loginUser['userID']
    }
    dispatch(getMyPost(body));
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성 시간', '조회수']}>
        {
          _mypostList ? _mypostList.map((char, index) => {
            return (
              <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={null} created_date={char[6]} views={char[7]} mypage={true} />
            )
          }) : null
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyPostList;