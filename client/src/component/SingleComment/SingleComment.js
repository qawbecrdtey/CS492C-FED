/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BodyContainer, SingleCommentContainer, WriterContainer,
     ContentContainer, HoverContainer, HoverContent, ProfileContent
    } from './styled';

function SingleComment({ comment, postNO}) {
    const test = useSelector(state => state.user);
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
        window.location.replace(`/postView/${postNO}`);
    }

    // useEffect(() => {
    //     console.log(comment);
    // }, []);

    return (
        <SingleCommentContainer>
            <BodyContainer>
                <WriterContainer>
                    <HoverContainer>
                        {comment.writer}
                        <HoverContent className="profilecard">
                            <ProfileContent>
                                작성한 게시물 수: {test.myPostList.length}개
                            </ProfileContent>
                            <ProfileContent>
                                작성한 댓글 수: {test.myCommentList.length}개
                            </ProfileContent>
                            <ProfileContent>
                                좋아요 누른 수 : {test.myLikeList.length}개
                            </ProfileContent>
                        </HoverContent>
                    </HoverContainer>
                    <button onClick={deleteComment}>삭제</button>
                </WriterContainer>
                <ContentContainer>{comment.content}</ContentContainer>
            </BodyContainer>
        </SingleCommentContainer>
    )
}

export default SingleComment;
