/* eslint-disable react/prop-types */
import Header from '../../component/Header';
import React from 'react';
import { GroundContainer} from '../PostMain/styled';
import MypageFunc from '../../component/MypageFunc/MypageFunc';
import PageNumSelector from '../../component/PageNumSelector';

const MyPagePost = ({ match, isStory, onClickBoard, onClickPostList, onClickMyPage, onClickLogout, onClickDropDownMenu, onClickMenu }) => {
    const thiscomponent = 'MyPagePost';
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
};

export default MyPagePost;