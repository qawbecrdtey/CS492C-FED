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
  HoverContainer, 
  HoverContent, 
  ProfileContent,
  ToListBtn
} from './styled';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header';
import MDEditor from '@uiw/react-md-editor';
import { useHistory } from 'react-router';
import { InputContainer } from './styled';
import { editPost } from '../../actions/actions';
import Comment from '../../component/Comment/Comment';
import { Link } from 'react-router-dom';
const POST_URL = '/api/post';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4080/');

/**
 * - PostMain과 마찬가지로 서버에서 게시물을 불러오는 시간이 필요하기 때문에
     redux store로 초기화를 해준 후 로딩 과정을 거쳐 가장 최신의 게시물 목록을
     불러온 후 게시물 번호가 일치하는 데이터를 state에 저장하여 페이지를 렌더링합니다.      
 * - 게시물 넘버는 match.params로 받습니다.
 * - 목록 버튼을 누를 때 4가지 게시판 중 직전에 있었던 게시판으로 돌아가기 위해
     게시물 상세보기 버튼을 누를 때 쿼리스트링으로 원래 게시판의 정보를 넘겨줍니다.
     따라서 PostView에서 받아온 쿼리와 redux store에 저장된 페이지넘버를 조합하여
     되돌아갈 목록의 url을 지정합니다.
 * - 삭제의 경우 소켓 통신을 통해 해당 게시글 번호를 서버로 전송하여 서버에서 삭제되게 합니다.
 * - 수정의 경우 수정 버튼을 누를 시 처음에 원래 글의 제목과 내용이 에디터에 담겨 있도록 합니다.
     또한 등록과 마찬가지로 적절한 값이 아닌 경우 경고창이 뜨며 게시물이 등록되지 않습니다.
 * - 좋아요의 경우 페이지가 렌더링 될 때 좋아요 토글 버튼의 활성화 여부는 비동기 함수인
     loadPosts에서 받아온 게시물 정보의 likeUsers 리스트에서 확인합니다. 또한 좋아요 버튼은
     소켓통신으로 구현하여 버튼 클릭 시 해당 postNO와 userID를 서버에 전송하여 해당 postNO를
     가진 게시글의 likeUsers에 userID를 추가하거나 삭제하도록 합니다.
 */
 
const PostView = ({ match, isStory, onDelete, onSubmit, onLike, onClickBoard, onClickPostList, onClickMyPage, onClickLogout }) => {
  const _loginUser = useSelector(state => state.user.loginUser);
  const _postList = useSelector(state => state.user.postList);
  const pastPageNumber = useSelector(state => state.user.currentPage);
  const test = useSelector(state => state.user.userList);
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
      console.log('islike : ' + islike);
      console.log('_loginUser[userID] : ' + _loginUser['userID']);
      setActive(true);
    } else {
      console.log('islike : ' + islike);
      console.log('_loginUser[userID] : ' + _loginUser['userID']);
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
      <Header 
          mypage={true} 
          isStory={isStory}
          onClickBoard={onClickBoard}
          onClickPost={onClickPostList}
          onClickMyPage={onClickMyPage}
          onClickLogout={onClickLogout}
      />
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
            <InfoContainer>
              <HoverContainer>
                writer: {data[5]}
                <HoverContent className="profilecard">
                    <ProfileContent>
                        이메일: {test.filter(e => (e[1]==data[5]))[0][3]}
                    </ProfileContent>
                    <ProfileContent>
                        나이: {test.filter(e => (e[1]==data[5]))[0][4]}
                    </ProfileContent>
                    <ProfileContent>
                        전화번호: {test.filter(e => (e[1]==data[5]))[0][5]}
                    </ProfileContent>
                </HoverContent>
              </HoverContainer>
            </InfoContainer>
            <InfoContainer>{data[6]}</InfoContainer>
            <InfoContainer>views: {data[7]}</InfoContainer>
            {edit ?<button onClick={editContent}>등록</button>
            : <button onClick={clickEdit}>수정</button>}
            {edit ? <button onClick={cancle}>취소</button> : null}
            {edit ? null : 
            isStory ? <button onClick={onDelete}>삭제</button>
              : <button onClick={deletePost}>삭제</button>}
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
          {isStory ? <LikeButton 
            onClick={onLike}
            active={active}
          >
            like
          </LikeButton> : <LikeButton 
            onClick={clickLike}
            active={active}
          >
            like
          </LikeButton>}
          <Link to={goBackURL}>
            <ToListBtn>목록으로</ToListBtn>
          </Link>
        </ReactContainer>
      }
      {loading? null : 
        <CommentContainer>
          <Comment postNO={data[1]} isStory={isStory} _onSubmit={onSubmit}/>
        </CommentContainer>
      }
    </MainContainer>
  )
}
 
export default PostView;