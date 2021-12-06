/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../component/Header';
import { GroundContainer } from './styled';
import PageNumSelector from '../../component/PageNumSelector';
 
// eslint-disable-next-line react/prop-types
const PostMain = ({ match, isStory, onClickBoard, onClickPostList, onClickMyPage, onClickLogout, onClickDropDownMenu}) => {
  const thiscomponent = 'PostMain';
  // eslint-disable-next-line react/prop-types
  const { pageNO } = match.params;
  return (
    <GroundContainer>
      <Header 
        isStory={isStory}
        onClickBoard={onClickBoard}
        onClickPost={onClickPostList}
        onClickMyPage={onClickMyPage}
        onClickLogout={onClickLogout}
      />
      <PageNumSelector 
        isStory={isStory}
        pageNO={pageNO} 
        parentComponent={thiscomponent}
        onClickDropDownMenu={onClickDropDownMenu}
      />
    </GroundContainer>
  )
}
 
export default PostMain;