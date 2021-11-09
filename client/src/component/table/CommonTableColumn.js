import React from 'react';
 
// eslint-disable-next-line react/prop-types
const CommonTableColumn = ({ children }) => {
  return (
    <td className="common-table-column">
      {
        children
      }
    </td>
  )
}
 
export default CommonTableColumn;