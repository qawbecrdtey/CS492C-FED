import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '../Checkbox';
//const Checkbox = props => <input type="checkbox" {...props} />;
 
// eslint-disable-next-line react/prop-types
const Row = ({ postNO, title, no_comments, likes, userID, created_date, views, mypage }) => {
  return (
    <tr className="common-table-row">
      {mypage ? null : <td><Checkbox /></td>}
      <td>{postNO}</td>
      <td>
        <Link to={`/postView/${postNO}`}>{title}({no_comments})</Link>
      </td>
      <td>{likes}</td>
      {mypage ? null : <td>{userID}</td>}
      <td>{created_date}</td>
      <td>{views}</td>
    </tr>
  )
}
 
export default Row;