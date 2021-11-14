import React, { useEffect } from 'react';
import PostList from '../../component/PostList/PostList';
import { useSelector } from 'react-redux';
 
const PostMain = () => {
  const _loginUser = useSelector(state => state.user.loginUser);
  useEffect(()=>{
    console.log(_loginUser);
  },[]);
  return (
    <>
      <PostList />
    </>
  )
}
 
export default PostMain;