/* eslint-disable react/prop-types */
import React, { useState} from 'react';
import profileImage from '../../images/logo.svg';

function SingleComment(props) {
    const checkID = props.postNo === props.comment.postNO ? true : false
    const [isAuthorHover, setIsAuthorHover] = useState(false);
    
    return (
        <div>
            {
                checkID&&
                <div>
                    <div 
                        onMouseOver={() => setIsAuthorHover(true)}
                        onMouseOut={() => setIsAuthorHover(false)}
                    >
                        <img
                            src={isAuthorHover ? profileImage : ""}
                            alt=""
                        />
                        {props.comment.writer}
                    </div>
                        <p>
                            {props.comment.content}
                        </p>
                </div>
            }
        </div>
    )
}
export default SingleComment