import React from "react";
import { GroundContainer } from "../PostMain/styled";
import Header from '../../component/Header';
import MypageFunc from "../../component/MypageFunc/MypageFunc";
import MyLikeList from '../../component/MyLikeList/MyLikeList';

const MyPageLike = () => {
    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
            <MyLikeList/>
        </GroundContainer>
    )

}

export default MyPageLike;