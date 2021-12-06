import React from 'react';
import { Btn, FunctionContainer } from './styled';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import io from 'socket.io-client';
import { updateCurrentPage } from '../../actions/actions';
const socket = io.connect('http://localhost:4080/');
import PropTypes from 'prop-types';

/**
 * - 삭제 버튼 클릭 시 props로 받아온 removelist를 
     서버에 전달한 후 게시판 목록으로 이동합니다.   
 * - 글쓰기 버튼 클릭 시 게시물 작성 페이지로 이동합니다.
 */
// eslint-disable-next-line react/prop-types
const MainPageFunc = ({ removelist, onWrite, onDelete, isStory }) => {
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
        {isStory ? <Btn onClick={onWrite}>글쓰기</Btn> : 
        <Btn onClick={movetowriter}>글쓰기</Btn>}
        {isStory ? <Btn onClick={onDelete}>삭제하기</Btn> :
        <Btn onClick={removeposts}>삭제하기</Btn>}
      </FunctionContainer>
    )
}

MainPageFunc.propTypes = {
  /**
   * 삭제 버튼이 클릭되었을 때 상위 컴포넌트에서 props로 받아온 정보입니다.
   */
  removelist: PropTypes.any,
};

export default MainPageFunc;