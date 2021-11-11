import React from 'react';
import { Link } from 'react-router-dom';
const Checkbox = props => <input type="checkbox" {...props} />;
 
// eslint-disable-next-line react/prop-types
const Row = ({ no, title, no_comments, likes, writer, create_time, views }) => {
  return (
    <tr className="common-table-row">
      <td><Checkbox /></td>
      <td>{no}</td>
      <td>
        <Link to={`/postView/${no}`}>{title}({no_comments})</Link>
      </td>
      <td>{likes}</td>
      <td>{writer}</td>
      <td>{create_time}</td>
      <td>{views}</td>
    </tr>
  )
}
 
export default Row;