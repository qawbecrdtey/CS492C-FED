import React from 'react';
import './Template.css';

const TodoTemplate = ({ children }) => {
    return (
        <div className="Template">
            <div className="app-title">
                <div className="post-no">
                    (게시물 no)
                </div>
                <div>
                    제목
                </div>
            </div>
            <div className="post-writer">
                작성자
            </div>
            <div className="post-details">
                작성 시간, 조회 수, 댓글 수
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;