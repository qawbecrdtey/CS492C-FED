/* eslint-disable react/prop-types */
import React from "react";
import { GroundContainer } from "../PostMain/styled";
import Header from '../../component/Header';
import MypageFunc from "../../component/MypageFunc/MypageFunc";
import PageNumSelector from "../../component/PageNumSelector";

/**
 * - page 항목에 포함된 컴포넌트이며 MyPage의 상위 컴포넌트입니다.   
 * - MyLikeList와 PageNumSelector 컴포넌트를 하위 컴포넌트로 가집니다.
 */
const MyPageLike = ({ match }) => {
    const thiscomponent = 'MyPageLike';
    const { pageNO } = match.params;
    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
            <PageNumSelector pageNO={pageNO} parentComponent={thiscomponent}/>
        </GroundContainer>
    )

}

export default MyPageLike;