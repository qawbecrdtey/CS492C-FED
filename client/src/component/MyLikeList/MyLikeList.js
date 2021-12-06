import React, { useEffect } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getMyLikedPosts } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
 
/**
 * - Row에 thiscomponent 변수를 전달하여 상세보기에서 목록 전환 시
     url 생성에 사용할 수 있도록 합니다.
 * - MyPostList와 유사한 구조를 가지며, reducer를 이용해 서버에서 
     내가 좋아요 한 글을 불러와 렌더링 합니다.
 * - 정렬, 검색 기능이 없습니다.
 * - 작성자 이름에 마우스를 hover시 프로필 카드가 popover됩니다.
 * - Actions
 *    - 제목: 게시물 제목을 클릭하면 해당 게시물의 상세보기 페이지로 이동합니다.
 */

// eslint-disable-next-line react/prop-types
const MyLikeList = ({ pageNO, postPerPage, getPostCount, isStory }) => {
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
    if(isStory !== true) {
      dispatch(getMyLikedPosts(body));
    }
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