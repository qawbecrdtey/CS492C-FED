import React from 'react';
 
// eslint-disable-next-line react/prop-types
const CommonTableRow = ({ children }) => {
  return (
    <tr className="common-table-row">
      {
        children
      }
    </tr>
  )
}
 
export default CommonTableRow;