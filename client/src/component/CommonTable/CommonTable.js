/* eslint-disable react/prop-types */
import React from 'react';
import { TableContainer, TableHeaderColumn } from './styled';
 
const CommonTable = props => {
  const { headersName, children } = props;
  // eslint-disable-next-line no-unused-vars
  // const [element, setElement] = useState('');
  const handleClick = e => {
    props.getElement(e.target.innerText);
  }
 
  return (
    <TableContainer>
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <TableHeaderColumn key={index}>
                  {item ? <button onClick={handleClick}>{ item }</button> : null}
                </TableHeaderColumn>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </TableContainer>
  )
}
 
export default CommonTable;