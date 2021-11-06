import React, { useState, useRef, useCallback } from 'react';
import './Post.css';
// import Template from './Template';
// import CommentInput from './commentInput';
// import Comment from './Comment';
// import Article from './Article';
import Template from '../../../component/Template/Template'
import CommentInput from '../../../component/CommentInput/CommentInput'
import Comment from '../../../component/Comment/Comment'
import Article from '../../../component/Article/Article'
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';


function Post() {

  const [comments, setComments] = useState([
    { id: 1, name: 'Name', content: 'Content', }
  ]);

  const [like, setLike] = useState(0);  //좋아요 버튼구현


  const nextId = useRef(1);

  const onInsert = useCallback(
    (name, content) => {
      const comment = {
        id: nextId.current,
        name,
        content
      };
      console.log(name);
      console.log(content);
      setComments(comments => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments],
  );


  return (
    <div>
      <Template>
        <Article />
          <span class="like_btn" onClick={() => { setLike(like + 1) }}>
            <BiLike/>
          </span>{like}
        <CommentInput onInsert={onInsert} />
      </Template>
      <div style={{ marginBottom: "4rem" }}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              content={comment.content}
            />
          )
        })}
      </div>
      <div>
        <Link to="/markdown">
          <button>
              작성하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Post;