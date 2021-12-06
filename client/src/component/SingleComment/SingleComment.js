/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BodyContainer, SingleCommentContainer, WriterContainer,
     ContentContainer, DateContainer, HoverContainer, HoverContent, 
     ProfileContent, CommentFuncContainer} from './styled';
import PropTypes from 'prop-types';

/**
 * - 작성자의 이름에 마우스를 hover할 경우, 프로필 카드가 노출됩니다.   
 * - 삭제 버튼을 click하면 DB에서 해당 댓글을 삭제하고 페이지를 다시 렌더링합니다.
 */
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

SingleComment.propTypes = {
    /**
     * Comment에서 map을 사용할 때 필요한 변수입니다.
     */
    key: PropTypes.number,
    /**
     * Comment로부터 댓글의 정보를 props로 받습니다.
     */
    comment: PropTypes.object,
    /**
     * Comment에서 게시물 번호를 props로 받습니다.
     */
    postNO: PropTypes.number,
  };

export default SingleComment;
