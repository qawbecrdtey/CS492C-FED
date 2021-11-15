import React from 'react';
import { Btn, SearchContainer } from './styled';
import { useHistory } from 'react-router';

const MainPageFunc = () => {
    const history = useHistory();
    const movetowriter = () => {
        history.push('/postWrite');
    }
    return (
      <>
      <SearchContainer>검색container자리</SearchContainer>
      <Btn onClick={movetowriter}>글쓰기</Btn>
      <Btn>수정하기</Btn>
      <Btn>삭제하기</Btn>
      </>
    )
}

export default MainPageFunc;