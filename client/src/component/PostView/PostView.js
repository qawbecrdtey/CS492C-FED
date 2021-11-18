/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { CommentContainer, ContentContainer, InfoContainer, MainContainer, PostHeaderContainer, TitleContainer, UnderTitleContainer } from './styled';
import { useSelector } from 'react-redux';
import { HeaderContainer } from '../../page/PostMain/styled';
import Header from '../Header';
import ReactMarkdown from 'react-markdown'
 
const PostView = ({ history, location, match }) => {
  const _postList = useSelector(state => state.user.postList);
  const { no } = match.params;
  const data = _postList.find((element) => {
    return element[1] == no
  });
  console.log(data);
 
  return (
    <MainContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <PostHeaderContainer>
        <TitleContainer>{data[2]}</TitleContainer>
        <UnderTitleContainer>
          <InfoContainer>{data[6]}</InfoContainer>
          <InfoContainer>view: {data[7]}</InfoContainer>
          <InfoContainer>no_comments: {data[3]}</InfoContainer>
          <button>수정</button>
          <button>삭제</button>
        </UnderTitleContainer>
      </PostHeaderContainer>
      <ContentContainer>
        <ReactMarkdown>{data[8]}</ReactMarkdown>
      </ContentContainer>
      <CommentContainer />
    </MainContainer>
  )
}
 
export default PostView;