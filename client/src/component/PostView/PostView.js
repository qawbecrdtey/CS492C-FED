/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { request } from '../../utils/axios';
import React, { useEffect, useState } from 'react';
import { 
  CommentContainer, 
  ContentContainer, 
  InfoContainer, 
  MainContainer, 
  PostHeaderContainer, 
  ReactContainer, 
  TitleContainer, 
  UnderTitleContainer,
  LikeButton,
 } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderContainer } from '../../page/PostMain/styled';
import Header from '../Header';
import MDEditor from '@uiw/react-md-editor';
import { useHistory } from 'react-router';
import { InputContainer } from './styled';
import { editPost, like, unlike } from '../../actions/actions';
const POST_URL = '/api/post';
 
const PostView = ({ location, match }) => {
  const _postList = useSelector(state => state.user.postList);
  const { no } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  // const [data, setData] = useState('');
  const data = _postList.find((element) => {
    return element[1] == no
  });
  const [title, setTitle] = useState(data[2]);
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(data[8]);
  const [active, setActive] = useState(false);
  const clickEdit = () => {
    setEdit(true);
  };
  const cancle = () => {
    setEdit(false);
  };
  const writeTitle = e => {
    setTitle(e.target.value);
  };
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
  };

  const toPostList = () => {
    history.push('/postMain');
  };

  const clickLike = () => {
    let body = {
      postNO: data[1],
      userID: data[5],
    }
    if (!active) {
      dispatch(like(body));
    } else {
      dispatch(unlike(body));
    }
    setActive(!active);
  };

  useEffect(() => {
    const data = _postList.find((element) => {
      return element[1] == no
    });
    // setData(initialdata);
    let body = {
      postNO: data[1],
      userID: data[5],
    }
    const isornot = request('post', POST_URL + '/islike', body);
    console.log(isornot);
  }, []);
 
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
          <InfoContainer>postNO : {data[1]}</InfoContainer>
          <InfoContainer>writer: {data[5]}</InfoContainer>
          <InfoContainer>{data[6]}</InfoContainer>
          <InfoContainer>views: {data[7]}</InfoContainer>
          {edit ?<button onClick={editContent}>등록</button>
          : <button onClick={clickEdit}>수정</button>}
          {edit ? <button onClick={cancle}>취소</button> : null}
          {!edit ? <button>삭제</button> : null}
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
      <ReactContainer>
        <InfoContainer>likes : {data[4]}</InfoContainer>
        <InfoContainer>no_comments: {data[3]}</InfoContainer>
        <LikeButton 
          onClick={clickLike}
          active={active}
        >
          like
        </LikeButton>
        <button onClick={toPostList}>목록으로</button>
      </ReactContainer>
      <CommentContainer />
    </MainContainer>
  )
}
 
export default PostView;