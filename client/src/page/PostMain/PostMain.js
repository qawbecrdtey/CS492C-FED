import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../component/Header';
import { GroundContainer } from './styled';
import PageNumSelector from '../../component/PageNumSelector';
 
// eslint-disable-next-line react/prop-types
const PostMain = ({ match }) => {
  const _loginUser = useSelector(state => state.user.loginUser);
  const thiscomponent = 'PostMain';
  // eslint-disable-next-line react/prop-types
  const { pageNO } = match.params;
  useEffect(()=>{
    console.log(_loginUser);
  },[]);
  return (
    <GroundContainer>
      <Header />
      <PageNumSelector pageNO={pageNO} parentComponent={thiscomponent}/>
    </GroundContainer>
  )
}
 
export default PostMain;