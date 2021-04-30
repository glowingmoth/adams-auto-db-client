import React from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

const CustomerRow = (props) => {

  Axios.post('http://localhost:3001/delete', {});

  return (
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
        <Link to={`/read/${props.id}`}>Details</Link>
      </tr>
  );
};

export default CustomerRow;