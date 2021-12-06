/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BodyContainer, SingleCommentContainer, WriterContainer,
     ContentContainer, DateContainer, HoverContainer, HoverContent, 
     ProfileContent, CommentFuncContainer} from './styled';

function SingleComment({ comment, postNO}) {
    const test = useSelector(state => state.user.userList);
    const deleteComment = (e) => {
        e.preventDefault();
        
        const variables = {
            postNO: postNO,
        }

        axios.post('/api/comment/deleteComment', variables)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.result)
                } else {
                    alert('Failed to delete Comment')
                }
        })
        window.location.replace(window.location.href);
    }

    const userProfile = test.filter(e => (e[1]==comment.writer));
    console.log(userProfile)
    useEffect(() => {
        // console.log(comment);
        // console.log(test);
    }, []);
    

    return (
        <SingleCommentContainer>
            <BodyContainer>
                <WriterContainer>
                    <HoverContainer>
                        {comment.writer}
                        <HoverContent className="profilecard">
                            <ProfileContent>
                                이메일: {userProfile[0][3]}
                            </ProfileContent>
                            <ProfileContent>
                                나이: {userProfile[0][4]}
                            </ProfileContent>
                            <ProfileContent>
                                전화번호: {userProfile[0][5]}
                            </ProfileContent>
                        </HoverContent>
                    </HoverContainer>
                    <CommentFuncContainer>       
                        <DateContainer>{comment.created_date}</DateContainer>
                        <button onClick={deleteComment}>삭제</button>
                    </CommentFuncContainer>
                </WriterContainer>
                <ContentContainer>{comment.content}</ContentContainer>
            </BodyContainer>
        </SingleCommentContainer>
    )
}

export default SingleComment;
