import React from 'react';
import { Link } from "react-router-dom";
// import Axios from 'axios';


const CustomerRow = (props) => {

  // Axios.post('http://localhost:3001/delete', {});

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