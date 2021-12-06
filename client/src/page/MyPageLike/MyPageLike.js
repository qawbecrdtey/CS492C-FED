/* eslint-disable react/prop-types */
import React from "react";
import { GroundContainer } from "../PostMain/styled";
import Header from '../../component/Header';
import MypageFunc from "../../component/MypageFunc/MypageFunc";
import PageNumSelector from "../../component/PageNumSelector";


/**
 * - page 항목에 포함된 컴포넌트이며 MyPage의 상위 컴포넌트입니다.   
 * - MyLikeList와 PageNumSelector 컴포넌트를 하위 컴포넌트로 가집니다.
 * - 처음 컴포넌트를 띄울 시 에러창이 뜨지만 xClose 버튼을 눌러 없애고 컴포넌트를 볼 수 있습니다.
 * - Actions 
 *      - Board : 현재 화면(메인 게시판)으로 새로고침하며 이동합니다.
 *      - MyPage : 마이페이지로 이동합니다.
 *      - Logout : 로그아웃되며 로그인 페이지로 이동합니다.
 *      - 제목 클릭 : 해당 게시물 상세보기 주소로 이동합니다.
 *      - 페이지 번호 : 해당 페이지로 이동합니다. 이 컴포넌트에서는 서버 연결 과정 문제로 Nan이 뜨지만 실제 구동은 앱에서 확인할 수 있습니다.
 *      - post/page 드롭다운 메뉴 : 페이지당 게시물 개수가 변경됩니다. 
 *      - 내가 쓴 글/내가 좋아요 누른 글/내가 쓴 댓글: 각 종류별 마이페이지로 이동합니다.
 */
const MyPageLike = ({ match, isStory, onClickBoard, onClickPostList, onClickMyPage, onClickLogout, onClickDropDownMenu, onClickMenu }) => {
    const thiscomponent = 'MyPageLike';
    const { pageNO } = match.params;
    return (
        <GroundContainer>
            <Header 
                mypage={true} 
                isStory={isStory}
                onClickBoard={onClickBoard}
                onClickPost={onClickPostList}
                onClickMyPage={onClickMyPage}
                onClickLogout={onClickLogout}
            />
            <MypageFunc 
                onClickMenu={onClickMenu}
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

export default MyPageLike;