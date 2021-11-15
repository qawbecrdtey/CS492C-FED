/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Header from '../../component/Header';
import * as Showdown from "showdown";
import { GroundContainer, HeaderContainer } from '../PostMain/styled';
import { InputContainer } from './styled';
import { EditorContainer, BottomContainer } from './styled';
import ReactMde from 'react-mde';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { registerPost, getCurrentPostsNumInfo, updatePostNum } from '../../actions/actions';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const PostWrite = () => {
    const [content, setContent] = useState('');
    const [selectedTab, setSelectedTab] = useState('write');
    const history = useHistory();
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const _loginUser = useSelector(state => state.user.loginUser);
    const [postNO, setPostNO] = useState(1);
    const _num_of_total_posts = useSelector(state => state.user.num_of_total_posts);
    const _current_top_post_num = useSelector(state => state.user.current_top_post_num);

    dispatch(getCurrentPostsNumInfo());
    console.log('num_of_total_posts : ' + _num_of_total_posts);
    console.log('current_top_post_num : ' + _current_top_post_num);
    const writeTitle = e => {
        setTitle(e.target.value);
    }
    const saveContent = () => {
        const created_date = new Date();
        console.log('postNO : ' + postNO);
        console.log('date : ' + created_date);
        console.log('userID : ' + _loginUser['userID']);
        console.log('content : ' + content);
        console.log('title : ' + title);
        let body = {
            postNO: postNO,
            title: title,
            no_comments: 0,
            likes: 0,
            userID: _loginUser['userID'],
            created_date: created_date,
            views: 0,
            content: content,
        }
        dispatch(registerPost(body));
        dispatch(updatePostNum({
            num_of_total_posts: _num_of_total_posts+1,
            current_top_post_num: _current_top_post_num+1,
        }));
        history.push('/postMain');
    }
    const toPostList = () => {
        history.push('/postMain');
    }
    useEffect(() => {
        // console.log('current_top_post_num : ' + current_top_post_num);
    });
    return (
        <GroundContainer >
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <EditorContainer>
                <InputContainer 
                    placeholder="제목"
                    onChange={writeTitle}
                />
                <ReactMde 
                    value={content}
                    onChange={setContent}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={(markdown) =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
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