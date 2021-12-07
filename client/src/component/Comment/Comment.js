/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Input } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { useSelector } from 'react-redux';
import SingleComment from '../../component/SingleComment/SingleComment';
import { CommentContainer, RepliesContainer, CommentListsContainer, SubmitButton } from './styled';
const { TextArea } = Input;
import PropTypes from 'prop-types';

/**
 * - Input Box, Submit Button, 여러 개의 SingleComment로 구성되어 있습니다.   
 * - Input Box에 댓글 내용을 입력한 뒤 Submit Button을 누르면 댓글의 정보가 DB에 입력됩니다.   
 * - DB에 저장된 댓글을 가져와 페이지를 다시 렌더링합니다.
 * - 스토리북 상에서는 DB와 통신할 때 댓글을 가져오는 부분에 문제가 있어 렌더링되지 않습니다. 상세한 기능은 리액트 앱으로 확인할 수 있습니다.
 * - Actions
 *      - Submit: Submit 버튼을 누르면 onSubmit을 호출하여 Input box의 내용을 서버에 전달합니다.
 */
function Comments({ postNO, _onSubmit, isStory }) {
    const user = useSelector(state => state.user.loginUser)

    const [Comment, setComment] = useState([])
    const [CommentLists, setCommentLists] = useState([])
    const userID = user.userID
    // const postNO = props.postNO
    const created_date = moment().format("YYYY년 MM월 DD일 HH시 mm분");

    const handleClick = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        if(isStory === true) return _onSubmit(e);
        else {
            e.preventDefault();
            if (Comment != '') {
                if (Comment.length >= 1000) {
                    alert('댓글 길이는 1000byte 이하여야 합니다')
                } else {
                    const variables = {
                        content: Comment,
                        postNO: postNO,
                        writer: userID,
                        created_date: created_date,
                    }
                    axios.post('/api/comment/saveComment', variables)
                        .then(response => {
                            if (response.data.success) {
                                setComment([])
                                window.location.replace(window.location.href);
                            } else {
                                alert('Failed to save Comment')
                            }
                        }
                    );
                }
            }
        }
    }

    useEffect(()=>{
        const variables = {
            postNO: postNO,
        }
        if(isStory !== true) {
        axios.post('/api/comment/getComments', variables)
            .then(response => {
                if (response.data.success) {
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get video Info')
                }
            })
        }
    },[]);
    
    return (
        <CommentContainer>
            <RepliesContainer>댓글</RepliesContainer>
            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleClick}
                    value={Comment}
                    placeholder="댓글 입력"
                />
                <br />
                <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
            </form>
            {/* Comment Lists  */}
            <CommentListsContainer>
                {CommentLists.map((comment) => (
                    <SingleComment 
                        key={comment._id} 
                        comment={comment}
                        postNO={postNO}
                    />
                ))}
            </CommentListsContainer>
        </CommentContainer>
    )
}

Comments.propTypes = {
    /**
     * PostView에서 게시물 번호를 props로 받습니다.
     */
    postNo: PropTypes.number,
  };

export default Comments