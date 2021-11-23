import React from "react";
import { GroundContainer } from "../PostMain/styled";
import Header from '../../component/Header';
import MypageFunc from "../../component/MypageFunc/MypageFunc";
import MyCommentList from "../../component/MyCommentList";

const MyPageComment = () => {
    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
            <MyCommentList />
        </GroundContainer>
    )

}

export default MyPageComment;