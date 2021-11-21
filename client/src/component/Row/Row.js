import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '../Checkbox';
//const Checkbox = props => <input type="checkbox" {...props} />;
 
// eslint-disable-next-line react/prop-types
const Row = ({ uuid, postNO, title, no_comments, likes, userID, created_date, views, checkedItems, setCheckedItems }) => {
  return (
    <tr className="common-table-row">
      <td><Checkbox key={uuid} uuid={uuid} checkedItems={checkedItems} setCheckedItems={setCheckedItems} /></td>
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