/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../component/Header';
import { GroundContainer } from './styled';
import PageNumSelector from '../../component/PageNumSelector';

/**
 * - page 항목에 포함된 컴포넌트이며 메인 페이지의 가장 상위 컴포넌트입니다.   
 * - PostList와 PageNumSelector 컴포넌트를 하위 컴포넌트로 가집니다.
 * - Actions
 *      - Board : 현재 화면(메인 게시판)으로 새로고침하며 이동합니다.
 *      - MyPage : 마이페이지로 이동합니다.
 *      - Logout : 로그아웃되며 로그인 페이지로 이동합니다.
 *      - 제목 클릭 : 해당 게시물 상세보기 주소로 이동합니다.
 *      - 테이블 column명 클릭 : 해당 요소로 게시글이 정렬됩니다.
 *      - 페이지 번호 : 해당 페이지로 이동합니다.
 *      - post/page 드롭다운 메뉴 : 페이지당 게시물 개수가 변경됩니다. 
 */
// eslint-disable-next-line react/prop-types
const PostMain = ({ match, isStory, onClickBoard, onClickPostList, onClickMyPage, onClickLogout, onClickDropDownMenu}) => {
  const thiscomponent = 'PostMain';
  // eslint-disable-next-line react/prop-types
  const { pageNO } = match.params;
  return (
    <GroundContainer>
      <Header 
        isStory={isStory}
        onClickBoard={onClickBoard}
        onClickPost={onClickPostList}
        onClickMyPage={onClickMyPage}
        onClickLogout={onClickLogout}
      />
      <PageNumSelector 
        isStory={isStory}
        pageNO={pageNO} 
        parentComponent={thiscomponent}
        onClickDropDownMenu={onClickDropDownMenu}
      />
    </GroundContainer>
  )
}
 
export default PostMain;