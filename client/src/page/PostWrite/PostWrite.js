/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../component/Header';
import * as Showdown from "showdown";
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
    const _loginUser = useSelector(state => state.user.loginUser);

    const writeTitle = e => {
        setTitle(e.target.value);
    }

    function pre_saveContent () {
        axios.get(POST_URL + '/currentposts', null)
            .then(_data => {
                const rcv_data = Object.values(_data);
                console.log(rcv_data[0].num_of_total_posts);
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
                    console.log("userID is none");
                    return false;
                }
                request('post', POST_URL + '/register', body);
                getAllPost();
                console.log('1');
                history.push('/postMain/1');
            })
    }

    const saveContent = () => {
        if (content != '' && title != '') pre_saveContent();
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
