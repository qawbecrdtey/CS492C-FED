import React from 'react';
import { Link } from 'react-router-dom';
const Checkbox = props => <input type="checkbox" {...props} />;
import io from 'socket.io-client';
const socket = io.connect('http://localhost:80/');
 
// eslint-disable-next-line react/prop-types
const Row = ({ postNO, title, no_comments, likes, userID, created_date, views, mypage }) => {
  const clickpost = () => {
    let item = {
      postNO: postNO,
      views: views,
    }
    socket.emit('post-click-snd', item);
  }
  return (
    <tr className="common-table-row">
      {mypage ? null : <td><Checkbox /></td>}
      <td>{postNO}</td>
      <td>
        <Link to={`/postView/${postNO}`} onClick={clickpost}>{title}({no_comments})</Link>
      </td>
      <td>{likes}</td>
      {mypage ? null : <td>{userID}</td>}
      <td>{created_date}</td>
      <td>{views}</td>
    </tr>
  )
}
 
export default Row;