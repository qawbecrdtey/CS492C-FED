/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { request } from '../../utils/axios';
import QueryString from 'qs';
import moment from 'moment';
import { 
  CommentContainer, 
  ContentOutContainer, 
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
import Header from '../Header';
import MDEditor from '@uiw/react-md-editor';
import { useHistory } from 'react-router';
import { InputContainer } from './styled';
import { editPost } from '../../actions/actions';
import Comment from '../../component/Comment/Comment';
const POST_URL = '/api/post';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4080/');
 
const PostView = ({ match }) => {
  const _loginUser = useSelector(state => state.user.loginUser);
  const _postList = useSelector(state => state.user.postList);
  const pastPageNumber = useSelector(state => state.user.currentPage);
  const [_reducerpostList , setRPL] = useState([..._postList]);
  const [loading, setLoading] = useState(true);
  const { no } = match.params;
  console.log('no : ' + no);
  const parentcomponent = Object.values(QueryString.parse(location.search));
  const goBackURL = parentcomponent + '/' + pastPageNumber;
  const _history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState('');
  const [active, setActive] = useState(false);
  const data = _reducerpostList.find((element) => {
    return element[1] == no
  });

  useEffect(() => {
    if (data) {
      setTitle(data[2]);
      setContent(data[[8]]);
    }
  },[data]);

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
    if (content != '' && title != '') {
      if (content.length >= 10000) {
        alert('내용 길이는 10000byte 이하여야 합니다');
      } else if (title.length >= 50) {
        alert('제목 길이는 50byte 이하여야 합니다');
      } else {
        const created_date = moment().format("YYYY년 MM월 DD일 HH시 mm분");
        let body = {
            postNO : data[1],
            title: title,
            no_comments: data[3],
            likes: data[4],
            userID: data[5],
            created_date: created_date,
            view: data[7],
            content: content,
            likeUsers: data[9],
        }
        dispatch(editPost(body));
        console.log(body);
        _history.push(goBackURL);
      }
    }
  };

  const toPostList = () => {
    _history.push(goBackURL);
  };


  const deletePost = () => {
    let removelist = [data[1]];
    socket.emit('remove-snd', { removelist });
    _history.push(goBackURL);
  }

  const clickLike = () => {
    let body = {
      postNO: data[1],
      userID: _loginUser['userID'],
    }
    if (!active) {
      console.log('dispatch like');
      socket.emit('like-snd', body);
    } else {
      console.log('dispatch unlike');
      socket.emit('unlike-snd', body);
    }
  };

  async function loadPosts () {
    const data = await request('get', POST_URL + '/posts', null);
    var postlist = [];
    var i;
    for (i=0; i<data.length; i++) {
      postlist.push(Object.values(data[i]));
    }
    setRPL(postlist);
    const received_data = postlist.find((element) => {
      return element[1] == no
    });    
    const islike = received_data[9].find((element) => {
      if(element === _loginUser['userID']) {
        return true;
      }
    })
    if (islike == _loginUser['userID']) {
      setActive(true);
    } else {
      setActive(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
    socket.on('like-rcv', item => {
      setActive(true);
    });
    socket.on('unlike-rcv', item => {
      setActive(false);
    });
    console.log('query : ' + Object.values(QueryString.parse(location.search))); 
  }, [active]);
 
  return (
    <MainContainer>
      <Header />
      {loading ? null : 
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
            {!edit ? <button onClick={deletePost}>삭제</button> : null}
          </UnderTitleContainer>
        </PostHeaderContainer>
      }
      {loading ? null : 
        <ContentOutContainer>
          <ContentContainer>
          {edit ? 
          <MDEditor
            height={400}
            value={content}
            onChange={setContent}
          /> : <MDEditor.Markdown source={data[8]} />}
          </ContentContainer>
        </ContentOutContainer>
      }
      {loading ? null : 
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
      }
      {loading? null : 
        <CommentContainer>
          <Comment postNO={data[1]}/>
        </CommentContainer>
      }
    </MainContainer>
  )
}
 
export default PostView;