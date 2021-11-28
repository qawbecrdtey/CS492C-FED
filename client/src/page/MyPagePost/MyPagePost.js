import Header from '../../component/Header';
import React from 'react';
import { GroundContainer } from '../PostMain/styled';
import MypageFunc from '../../component/MypageFunc/MypageFunc';
import MyPostList from '../../component/MyPostList/MyPostList';

const MyPagePost = () => {
    
    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
            <MyPostList />
        </GroundContainer>
    )
};

export default MyPagePost;