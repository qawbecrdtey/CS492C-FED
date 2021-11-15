import React, { useEffect } from 'react';
import PostList from '../../component/PostList';
import { useSelector } from 'react-redux';
import Header from '../../component/Header';
import MainPageFunc from '../../component/MainpageFunc/MainPageFunc';
import { GroundContainer, HeaderContainer, ListContainer, PageMoveContainer, FunctionContainer } from './styled';
 
const PostMain = () => {
  const _loginUser = useSelector(state => state.user.loginUser);
  useEffect(()=>{
    console.log(_loginUser);
  },[]);
  return (
    <GroundContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <FunctionContainer>
        <MainPageFunc />
      </FunctionContainer>
      <ListContainer>
        <PostList />
      </ListContainer>
      <PageMoveContainer />
    </GroundContainer>
  )
}
 
export default PostMain;