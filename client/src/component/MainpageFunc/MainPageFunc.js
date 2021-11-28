import React from 'react';
import { Btn, SearchContainer, FunctionContainer } from './styled';
import { useHistory } from 'react-router';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4080/');

// eslint-disable-next-line react/prop-types
const MainPageFunc = ({ removelist }) => {
    const history = useHistory();
    const movetowriter = () => {
        history.push('/postWrite');
    }
    const removeposts = () => {
      socket.emit('remove-snd', { removelist });
      console.log('removelist : ' + removelist);
      window.location.replace(`/postMain/1`);
    }
    return (
      <FunctionContainer>
        <SearchContainer>검색container자리</SearchContainer>
        <Btn onClick={movetowriter}>글쓰기</Btn>
        <Btn onClick={removeposts}>삭제하기</Btn>
      </FunctionContainer>
    )
}

export default MainPageFunc;