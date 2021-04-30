import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../Read.css';
import CustomerRow from '../components/CustomerRow';

const Read = () => {

  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setCustomerList(response.data);
    });
  }, []);

  const handleDetails = () => {

  };

  return (
    <div>
      <h1>Read</h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>

    {customerList.map(customer => (
      <CustomerRow id={customer.customer_id} firstName={customer.firstName} lastName={customer.lastName} phone={customer.phone} />
  ))}
      </table>
    </div>
  );
};

export default Read;