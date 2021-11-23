import React, { useEffect } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getMyPost, getAllUser, getCurrentPostsNumInfo, getMyLikedPosts } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
 
// eslint-disable-next-line react/prop-types
const MyPostList = ({ type }) => {
  const dispatch = useDispatch();
  const _mypostList = useSelector(state => state.user.myPostList);
  const _mylikeList = useSelector(state => state.user.myLikeList);
  const _loginUser = useSelector(state => state.user.loginUser);

  useEffect(() => {
    dispatch(getAllUser());
    let body = {
        userID: _loginUser['userID']
    }
    dispatch(getMyPost(body));
    dispatch(getMyLikedPosts(body));
    dispatch(getCurrentPostsNumInfo());
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성 시간', '조회수']}>
        {
          (type == 'post') ? _mypostList.map((char, index) => {
            return (
              <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} created_date={char[6]} views={char[7]} mypage={true} />
            )
          }) : _mylikeList.map((char, index) => {
              return (
                <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} created_date={char[6]} views={char[7]} mypage={true} />
              )
          })
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyPostList;