/* eslint-disable react/prop-types */
import React from "react";
import { GroundContainer } from "../PostMain/styled";
import Header from '../../component/Header';
import MypageFunc from "../../component/MypageFunc/MypageFunc";
import PageNumSelector from "../../component/PageNumSelector";

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