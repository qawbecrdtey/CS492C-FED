import React from "react";
import { GroundContainer } from "../PostMain/styled";
import Header from '../../component/Header';
import MypageFunc from "../../component/MypageFunc/MypageFunc";
import MyPostList from '../../component/MyPostList/MyPostList';

const MyPageLike = () => {
    const pagetype = 'like';

    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
            <MyPostList type={pagetype} />
        </GroundContainer>
    )

}

export default MyPageLike;