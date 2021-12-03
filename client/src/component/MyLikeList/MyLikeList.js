import React, { useEffect } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getMyLikedPosts } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
 
// eslint-disable-next-line react/prop-types
const MyLikeList = ({ pageNO, postPerPage, getPostCount }) => {
  const dispatch = useDispatch();
  const thiscomponent = '/myPage/myLikes';
  const _mylikeList = useSelector(state => state.user.myLikeList);
  const _loginUser = useSelector(state => state.user.loginUser);
  getPostCount(_mylikeList.length);
  const startIndex = (pageNO - 1) * postPerPage;
  const endIndex = pageNO * postPerPage;

  const render_postList = _mylikeList.slice(startIndex, endIndex);

  const getElement = () => {
  }

  const getChecked = () => {
  }
  
  useEffect(() => {
    let body = {
        userID: _loginUser['userID']
    }
    dispatch(getMyLikedPosts(body));
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성자', '작성 시간', '조회수']} getElement={getElement} getChecked={getChecked} mypage={true}>
        {
          render_postList ? render_postList.map((char, index) => {
              return (
                <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={char[5]} created_date={char[6]} views={char[7]} mypage={true} parentcomponent={thiscomponent}/>
              )
          }) : null
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyLikeList;