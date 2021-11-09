import React from 'react';
import './Article.css';

const Article = () => {
    return (
        <div className="content">
            <div className="title"> → 본문 내용 ← </div>
            <div style={{ marginBottom: "5px" }}>
                ↓ 댓글 기능 구현 ↓
            </div>
        </div>
    );
};

export default Article;