import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Checkbox = props => <input type="checkbox" {...props} />;
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4080/');
import { HoverContainer, HoverContent, ProfileContent } from './styled';
 
// eslint-disable-next-line react/prop-types
const Row = ({ postNO, title, no_comments, likes, userID, created_date, views, mypage, add, del, isAllChecked, parentcomponent }) => {
  const [checked, setChecked] = useState(false);
  const test = useSelector(state => state.user.userList);
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

  console.log(test);
  
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
      {!mypage||userID ? <td className="hover">
        <HoverContainer>
          {userID}
          <HoverContent className="profilecard">
            <ProfileContent>
              이메일: {test.filter(e => (e[1]==userID))[0][3]}
            </ProfileContent>
            <ProfileContent>
              나이: {test.filter(e => (e[1]==userID))[0][4]}
            </ProfileContent>
            <ProfileContent>
              전화번호: {test.filter(e => (e[1]==userID))[0][5]}
            </ProfileContent>
          </HoverContent>
        </HoverContainer>
      </td> : null}
      <td>{created_date}</td>
      <td>{views}</td>
    </tr>
  )
}
 
export default Row;