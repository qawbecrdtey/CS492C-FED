import React, { useEffect } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getAllPost, getAllUser, getCurrentPostsNumInfo } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
 
const PostList = () => {
  const dispatch = useDispatch();
  const _postList = useSelector(state => state.user.postList);

 
  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getAllPost());
    dispatch(getCurrentPostsNumInfo());
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['','글번호', '제목(댓글수)','좋아요','작성자', '작성 시간', '조회수']}>
        {
          _postList ? _postList.map((char, index) => {
            return (
              <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={char[5]} created_date={char[6]} views={char[7]} mypage={false} />
            )
          }) : ''
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default PostList;