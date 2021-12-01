/* eslint-disable react/prop-types */
import Header from '../../component/Header';
import React from 'react';
import { GroundContainer} from '../PostMain/styled';
import MypageFunc from '../../component/MypageFunc/MypageFunc';
import PageNumSelector from '../../component/PageNumSelector';

const MyPagePost = ({ match }) => {
    const thiscomponent = 'MyPagePost';
    const { pageNO } = match.params;
    
    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
            <PageNumSelector pageNO={pageNO} parentComponent={thiscomponent}/>
        </GroundContainer>
    )
};

export default MyPagePost;