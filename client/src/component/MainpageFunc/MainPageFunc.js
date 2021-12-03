import React from 'react';
import { Btn, FunctionContainer } from './styled';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import io from 'socket.io-client';
import { updateCurrentPage } from '../../actions/actions';
const socket = io.connect('http://localhost:4080/');

// eslint-disable-next-line react/prop-types
const MainPageFunc = ({ removelist }) => {
    const history = useHistory();
    const movetowriter = () => {
        history.push('/postWrite');
    }
    const dispatch = useDispatch();

    const removeposts = () => {
      dispatch(updateCurrentPage(1));
      socket.emit('remove-snd', { removelist });
      console.log('removelist : ' + removelist);
      window.location.replace(`/postMain/1`);
    }
    return (
      <FunctionContainer>
        <Btn onClick={movetowriter}>글쓰기</Btn>
        <Btn onClick={removeposts}>삭제하기</Btn>
      </FunctionContainer>
    )
}

export default MainPageFunc;