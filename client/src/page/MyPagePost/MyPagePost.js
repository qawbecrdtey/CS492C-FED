import Header from '../../component/Header';
import React from 'react';
import { GroundContainer } from '../PostMain/styled';
import MypageFunc from '../../component/MypageFunc/MypageFunc';
import MyPostList from '../../component/MyPostList/MyPostList';

const MyPagePost = () => {
    const pagetype = 'post';
    
    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
            <MyPostList type={pagetype} />
        </GroundContainer>
    )
};

export default MyPagePost;