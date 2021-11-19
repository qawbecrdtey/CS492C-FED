/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { CommentContainer, ContentContainer, InfoContainer, MainContainer, PostHeaderContainer, TitleContainer, UnderTitleContainer } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderContainer } from '../../page/PostMain/styled';
import Header from '../Header';
import MDEditor from '@uiw/react-md-editor';
import { useHistory } from 'react-router';
import { InputContainer } from './styled';
import { editPost } from '../../actions/actions';
 
const PostView = ({ location, match }) => {
  const _postList = useSelector(state => state.user.postList);
  const { no } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const data = _postList.find((element) => {
    return element[1] == no
  });
  const [title, setTitle] = useState(data[2]);
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(data[8]);
  const clickEdit = () => {
    setEdit(true);
  }
  const writeTitle = e => {
    setTitle(e.target.value);
  }
  const editContent = () => {
    const created_date = new Date();
    let body = {
        postNO : data[1],
        title: title,
        no_comments: data[3],
        likes: data[4],
        userID: data[5],
        created_date: created_date,
        view: data[7],
        content: content,
    }
    dispatch(editPost(body));
    console.log(body);
    history.push('/postMain');
  }

  const toPostList = () => {
    history.push('/postMain');
  }
 
  return (
    <MainContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <PostHeaderContainer>
        { edit ? 
          <TitleContainer>
            <InputContainer 
                placeholder="제목을 입력하세요"
                onChange={writeTitle}
                value={title}
            /> 
          </TitleContainer>
          : <TitleContainer>{data[2]}</TitleContainer>}
        <UnderTitleContainer>
          <InfoContainer>{data[6]}</InfoContainer>
          <InfoContainer>view: {data[7]}</InfoContainer>
          <InfoContainer>no_comments: {data[3]}</InfoContainer>
          {edit ?<button onClick={editContent}>등록</button>
          : <button onClick={clickEdit}>수정</button>}
          {!edit ? <button>삭제</button> : null}
          <button onClick={toPostList}>목록으로</button>
        </UnderTitleContainer>
      </PostHeaderContainer>
      <ContentContainer>
        {edit ? 
        <MDEditor
          height={400}
          value={content}
          onChange={setContent}
        /> : <MDEditor.Markdown source={data[8]} />}
      </ContentContainer>
      <CommentContainer />
    </MainContainer>
  )
}
 
export default PostView;