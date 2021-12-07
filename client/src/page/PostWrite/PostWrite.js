/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../component/Header';
// import * as Showdown from "showdown";
import { GroundContainer } from '../PostMain/styled';
import { InputContainer } from './styled';
import { request } from '../../utils/axios';
import { EditorContainer, BottomContainer } from './styled';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { getAllPost } from '../../actions/actions';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import moment from 'moment';
const POST_URL = '/api/post';

/**
 * - page 항목에 포함된 컴포넌트이며 게시물 작성 시 노출됩니다.      
 * - react-md-editor로 마크다운 문법이 적용되게 하였습니다.   
 * - moment.js로 작성 시간을 저장하여 렌더링하였습니다.   
 * - 게시물 번호의 경우 등록 버튼을 누르는 순간 DB에 저장된 
     가장 큰 postNO에서 1을 더한 값을 사용합니다.   
 * - 작성자의 정보는 redux store에서 불러옵니다.   
 * - 작성 버튼을 누르면 서버에서 postNO를 받아온 후 데이터를 서버로 다시 보내줍니다.   
 * - 제목이나 내용 중 하나라도 비어 있거나 길이 제한을 넘을 경우 작성되지 않고 경고창이 노출됩니다.
 * - 게시물 작성 시 마크다운 에디터가 제공되며 프리뷰도 제공됩니다.
 * - Actions
 *      - 목록으로 : 목록으로 이동하면서 dispatch로 redux store의 currentpage를 1로 초기화해줍니다.
 *      - MyPage : 마이페이지로 이동하면서 dispatch로 redux store의 currentpage를 1로 초기화해줍니다.
 *      - Logout : 로그인 페이지로 이동하면서 dispatch로 redux store의 loginUser를 초기화해줍니다.
 *      - 등록 : 게시물을 등록하고 게시물 목록으로 돌아갑니다.
 *      - 취소 : 게시물 작성을 취소하고 게시물 목록으로 돌아갑니다.
 */
const PostWrite = ({ isStory, onWrite, onCancel }) => {
    const [content, setContent] = useState('');
    const history = useHistory();
    const [title, setTitle] = useState('');
    const _loginUser = useSelector(state => state.user.loginUser);

    const writeTitle = e => {
        setTitle(e.target.value);
    }

    function pre_saveContent () {
        axios.get(POST_URL + '/currentposts', null)
            .then(_data => {
                const rcv_data = Object.values(_data);
                const created_date = moment().format("YYYY년 MM월 DD일 HH시 mm분");
                let body = {
                    postNO: rcv_data[0].num_of_total_posts + 1,
                    title: title,
                    no_comments: 0,
                    likes: 0,
                    userID: _loginUser['userID'],
                    created_date: created_date,
                    views: 0,
                    content: content,
                }
                if (body['userID'] == '') {
                    return false;
                }
                request('post', POST_URL + '/register', body);
                getAllPost();
                history.push('/postMain/1');
            })
    }

    const saveContent = () => {
        if (content != '' && title != '') {
            if (content.length >= 10000) {
                alert('내용 길이는 10000byte 이하여야 합니다');
            } else if (title.length >= 50) {
                alert('제목 길이는 50byte 이하여야 합니다')
            } else {
                pre_saveContent();
            }
        }
    }
    const toPostList = () => {
        history.push('/postMain/1');
    }
    
    return (
        <GroundContainer >
            <Header />
            <EditorContainer>
                <InputContainer 
                    placeholder="제목을 입력하세요"
                    onChange={writeTitle}
                />
                <MDEditor
                height={500}
                value={content}
                onChange={setContent}
                />
            </EditorContainer>
            <BottomContainer>
                {isStory ? <button onClick={onWrite}>등록</button> :
                <button onClick={saveContent}>등록</button>}
                {isStory ? <button onClick={onCancel}>취소</button> :
                <button onClick={toPostList}>취소</button>}
            </BottomContainer>
        </GroundContainer>

    )

}

export default PostWrite;
