import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Checkbox = props => <input type="checkbox" {...props} />;
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4080/');
 
// eslint-disable-next-line react/prop-types
const Row = ({ postNO, title, no_comments, likes, userID, created_date, views, mypage, add, del, isAllChecked, parentcomponent }) => {
  const [checked, setChecked] = useState(false);
  const querystring = '?parent=';

  const handleClick = () => {
    setChecked(!checked);
    if (checked) {
      del(postNO);
    } else {
      add(postNO);
    }
  }
  const clickpost = () => {
    let item = {
      postNO: postNO,
    }
    socket.emit('post-click-snd', item);
  }
  useEffect(() => {
    setChecked(isAllChecked);
  }, [isAllChecked]);

  useEffect(() => {
    setChecked(false);
  }, [window.location.href]);
  return (
    <tr className="common-table-row">
      {mypage ? null : <td><Checkbox checked={checked} onChange={handleClick} /></td>}
      <td>{postNO}</td>
      <td>
        <Link to={`/postView/${postNO}${querystring}${parentcomponent}`} onClick={clickpost}>{title}({no_comments})</Link>
      </td>
      <td>{likes}</td>
      {!mypage||userID ? <td>{userID}</td> : null}
      <td>{created_date}</td>
      <td>{views}</td>
    </tr>
  )
}
 
export default Row;