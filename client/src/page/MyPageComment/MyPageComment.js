/* eslint-disable react/prop-types */
import React from "react";
import { GroundContainer } from "../PostMain/styled";
import Header from '../../component/Header';
import MypageFunc from "../../component/MypageFunc/MypageFunc";
import PageNumSelector from "../../component/PageNumSelector";

const MyPageComment = ({ match }) => {
    const thiscomponent = 'MyPageComment';
    const { pageNO } = match.params;
    return (
        <GroundContainer>
            <Header mypage={true} />
            <MypageFunc />
            <PageNumSelector pageNO={pageNO} parentComponent={thiscomponent}/>
        </GroundContainer>
    )

}

export default MyPageComment;