import React from 'react';
import { Btn, FunctionContainer } from './styled';
import { useHistory } from 'react-router';

import io from 'socket.io-client';
import { useSelector } from 'react-redux';
const socket = io.connect('http://localhost:4080/');

// eslint-disable-next-line react/prop-types
const MainPageFunc = ({ removelist }) => {
    const history = useHistory();
    const movetowriter = () => {
        history.push('/postWrite');
    }
    
    //const dispatch = useDispatch();
    //const currentPage = useSelector(state => state.user.currentPage);
    const _postlist = useSelector(state => state.user.postList);
    const postListSize = _postlist.length;

    console.log(`postListSize = ${postListSize}`);
    console.log(`removeList = ${removelist}`);
    console.log(removelist);

    const resultPage = (() => {
      //if(currentPage)
    })();
    
    const removeposts = () => {

      socket.emit('remove-snd', { removelist });
      console.log('removelist : ' + removelist);
      window.location.replace(`/postMain/${resultPage}`);
    }
    return (
      <FunctionContainer>
        <Btn onClick={movetowriter}>글쓰기</Btn>
        <Btn onClick={removeposts}>삭제하기</Btn>
      </FunctionContainer>
    )
}

export default MainPageFunc;