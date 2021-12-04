import React from 'react';
import Header from '../../component/Header';
import { GroundContainer } from './styled';
import PageNumSelector from '../../component/PageNumSelector';
 
// eslint-disable-next-line react/prop-types
const PostMain = ({ match }) => {
  const thiscomponent = 'PostMain';
  // eslint-disable-next-line react/prop-types
  const { pageNO } = match.params;
  return (
    <GroundContainer>
      <Header />
      <PageNumSelector pageNO={pageNO} parentComponent={thiscomponent}/>
    </GroundContainer>
  )
}
 
export default PostMain;