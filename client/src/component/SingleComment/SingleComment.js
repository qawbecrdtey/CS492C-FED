/* eslint-disable react/prop-types */
import React from 'react'
import {Comment} from 'antd';

function SingleComment(props) {
    const checkID = props.postNo === props.comment.postID ? true : false
    return (
        <div>
            {
                checkID&&
                <Comment
                    content = {<p>{props.comment.content}</p>}
                />
            }
        </div>
    )
}
export default SingleComment