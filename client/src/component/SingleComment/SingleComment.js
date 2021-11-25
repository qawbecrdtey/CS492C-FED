/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { BodyContainer, SingleCommentContainer, WriterContainer,
     ContentContainer, HoverContainer, HoverContent, ProfileContent
    } from './styled';

function SingleComment(props) {
    const test = useSelector(state => state.user);
    console.log(test)
    return (
        <SingleCommentContainer>
            <BodyContainer>
                <WriterContainer>
                    <HoverContainer>
                        {props.comment.writer}
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
                </WriterContainer>
                <ContentContainer>{props.comment.content}</ContentContainer>
            </BodyContainer>
        </SingleCommentContainer>
    )
}

export default SingleComment
