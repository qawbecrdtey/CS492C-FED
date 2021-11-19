import React from 'react';
import { Link } from 'react-router-dom';
const Checkbox = props => <input type="checkbox" {...props} />;
 
// eslint-disable-next-line react/prop-types
const Row = ({ postNO, title, no_comments, likes, userID, created_date, views }) => {
  return (
    <tr className="common-table-row">
      <td><Checkbox /></td>
      <td>{postNO}</td>
      <td>
        <Link to={`/postView/${postNO}`}>{title}({no_comments})</Link>
      </td>
      <td>{likes}</td>
      <td>{userID}</td>
      <td>{created_date}</td>
      <td>{views}</td>
    </tr>
  )
}
 
export default Row;