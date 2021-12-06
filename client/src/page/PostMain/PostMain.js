import React from 'react';
import Header from '../../component/Header';
import { GroundContainer } from './styled';
import PageNumSelector from '../../component/PageNumSelector';

/**
 * - page 항목에 포함된 컴포넌트이며 메인 페이지의 가장 상위 컴포넌트입니다.   
 * - PostList와 PageNumSelector 컴포넌트를 하위 컴포넌트로 가집니다.
 */
// eslint-disable-next-line react/prop-types
const PostMain = ({ match }) => {
  const thiscomponent = 'PostMain';
  // eslint-disable-next-line react/prop-types
  const { pageNO } = match.params;
  return (
    <GroundContainer>
      <Header isStory={false}/>
      <PageNumSelector pageNO={pageNO} parentComponent={thiscomponent}/>
    </GroundContainer>
  )
}
 
export default PostMain;