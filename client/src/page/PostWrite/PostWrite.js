/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Header from '../../component/Header';
import * as Showdown from "showdown";
import { GroundContainer, HeaderContainer } from '../PostMain/styled';
import { InputContainer } from './styled';
import { request } from '../../utils/axios';
import { EditorContainer, BottomContainer } from './styled';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { registerPost, updatePostNum } from '../../actions/actions';
import MDEditor from '@uiw/react-md-editor';
const POST_URL = '/api/post';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const PostWrite = () => {
    const [content, setContent] = useState('');
    const history = useHistory();
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const _loginUser = useSelector(state => state.user.loginUser);
    const _num_of_total_posts = useSelector(state => state.user.num_of_total_posts);
    const _current_top_post_num = useSelector(state => state.user.current_top_post_num);

    const writeTitle = e => {
        setTitle(e.target.value);
    }

    async function saveContent () {
        const _data = await request('get', POST_URL + '/currentposts', null);
        const rcv_data = Object.values(_data);
        console.log(rcv_data[0]);
        const created_date = new Date();
        let body = {
            postNO: rcv_data[0] + 1,
            title: title,
            no_comments: 0,
            likes: 0,
            userID: _loginUser['userID'],
            created_date: created_date,
            views: 0,
            content: content,
        }
        dispatch(registerPost(body));
        let PostNumBody = {
            num_of_total_posts: _num_of_total_posts+1,
            current_top_post_num: _current_top_post_num+1,
        }
        console.log(dispatch(updatePostNum(PostNumBody)));
        history.push('/postMain/1');
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
                <button onClick={saveContent}>등록</button>
                <button onClick={toPostList}>취소</button>
            </BottomContainer>
        </GroundContainer>

    )

}

export default PostWrite;