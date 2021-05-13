import React from 'react';
import { Link } from "react-router-dom";


const CustomerRow = (props) => {

  return (
    <>
      <tbody>
        <tr>
          <td>
            {props.firstName}  
          </td>
          <td>
            {props.lastName} 
          </td> 
          <td>
            {props.phone}
          </td>
          <td>
          <Link to={`/read/${props.id}`}>Details</Link>
          </td>      
        </tr>
      </tbody>
    </>
  );
};

export default CustomerRow;