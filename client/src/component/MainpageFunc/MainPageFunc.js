import React from 'react';
import { Btn, SearchContainer, FunctionContainer } from './styled';
import { useHistory } from 'react-router';

const MainPageFunc = () => {
    const history = useHistory();
    const movetowriter = () => {
        history.push('/postWrite');
    }
    return (
      <FunctionContainer>
        <SearchContainer>검색container자리</SearchContainer>
        <Btn onClick={movetowriter}>글쓰기</Btn>
        <Btn>삭제하기</Btn>
      </FunctionContainer>
    )
}

export default MainPageFunc;