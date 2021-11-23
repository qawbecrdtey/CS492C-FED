/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import profileImage from '../../images/logo.svg';
import { BodyContainer, SingleCommentContainer, WriterContainer, ContentContainer } from './styled';

function SingleComment(props) {
    const [isAuthorHover, setIsAuthorHover] = useState(false);
    
    return (
        <SingleCommentContainer>
            <BodyContainer>
                <WriterContainer 
                    onMouseOver={() => setIsAuthorHover(true)}
                    onMouseOut={() => setIsAuthorHover(false)}
                >
                    <img
                        src={isAuthorHover ? profileImage : ""}
                        alt=""
                    />
                    {props.comment.writer}
                </WriterContainer>
                <ContentContainer>{props.comment.content}</ContentContainer>
            </BodyContainer>
        </SingleCommentContainer>
    )
}
export default SingleComment