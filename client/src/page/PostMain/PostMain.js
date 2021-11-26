import React, { useEffect } from 'react';
import PostList from '../../component/PostList';
import { useSelector } from 'react-redux';
import Header from '../../component/Header';
import { GroundContainer } from './styled';
import PageNumSelector from '../../component/PageNumSelector';
 
// eslint-disable-next-line react/prop-types
const PostMain = ({ match }) => {
  const _loginUser = useSelector(state => state.user.loginUser);
  // eslint-disable-next-line react/prop-types
  const { pageNO } = match.params;
  console.log('pageNO : ' + pageNO);
  useEffect(()=>{
    console.log(_loginUser);
  },[]);
  return (
    <GroundContainer>
      <Header />
      <PostList />
      <PageNumSelector />
    </GroundContainer>
  )
}
 
export default PostMain;