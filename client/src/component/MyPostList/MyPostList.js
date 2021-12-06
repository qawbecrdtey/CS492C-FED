/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getMyPost } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
 
/**
 * - Row에 thiscomponent 변수를 전달하여 상세보기에서 목록 전환 시
     url 생성에 사용할 수 있도록 합니다.
 * - PostList와 유사한 구조를 가지며, 검색 기능이 제외되고 정렬 기능만 있습니다.
 * - reducer를 사용하여 서버에서 내가 쓴 글을 userID를 이용하여 불러와서
     sort과정을 거쳐 렌더링 합니다.
 */
const MyPostList = ({ pageNO, postPerPage, getPostCount, isStory }) => {
  const dispatch = useDispatch();
  const thiscomponent = '/myPage/myPosts';
  const _mypostList = useSelector(state => state.user.myPostList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const [sortCondition, setSortCondition] = useState({
    element: '글번호',
    sortFlag: [false, false, false, false, false, false],
  })
  const sorted_postList = [..._mypostList];
  getPostCount(sorted_postList.length);
  sorted_postList.sort(function(a,b) {
    if (sortCondition.element == '글번호') {
      if (sortCondition.sortFlag[0]) return a[1] - b[1]
      else return b[1] - a[1]
    } else if (sortCondition.element == '제목(댓글수)') {
      if (sortCondition.sortFlag[1]) return a[2].localeCompare(b[2]); 
      else return b[2].localeCompare(a[2]);
    } else if (sortCondition.element == '좋아요') {
      if (sortCondition.sortFlag[2]) return a[4] - b[4]
      else return b[4] - a[4]
    } else if (sortCondition.element == '작성 시간') {
      if (sortCondition.sortFlag[4]) return a[6].localeCompare(b[6]);
      else return b[6].localeCompare(a[6]);
    } else if (sortCondition.element == '조회수') {
      if (sortCondition.sortFlag[5]) return a[7] - b[7]
      else return b[7] - a[7]
    }
  });


  const startIndex = (pageNO - 1) * postPerPage;
  const endIndex = pageNO * postPerPage;

  const render_postList = sorted_postList.slice(startIndex, endIndex);

  const getElement = (condition) => {
    setSortCondition(condition);
  }

  const getChecked = () => {
  }

  useEffect(() => {
    let body = {
        userID: _loginUser['userID']
    }
    console.log(`body = ${body}`);
    console.log(body);
    if(isStory !== true) {
      dispatch(getMyPost(body));
    }
  }, [ ])
  return (
    <ListContainer>
      <CommonTable headersName={['글번호', '제목(댓글수)', '좋아요', '작성 시간', '조회수']} getElement={getElement} getChecked={getChecked} mypage={true}>
        {
          render_postList ? render_postList.map((char, index) => {
            return (
              <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={null} created_date={char[6]} views={char[7]} mypage={true} parentcomponent={thiscomponent}/>
            )
          }) : null
        }
      </CommonTable>
    </ListContainer>
  )
}
 
export default MyPostList;
