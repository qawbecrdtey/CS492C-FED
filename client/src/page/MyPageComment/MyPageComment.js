import React from "react";
import { GroundContainer } from "../PostMain/styled";
import Header from '../../component/Header';
import MypageFunc from "../../component/MypageFunc/MypageFunc";

const MyPageComment = () => {
    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
        </GroundContainer>
    )

}

export default MyPageComment;