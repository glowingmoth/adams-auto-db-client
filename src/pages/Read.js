import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../styles/Read.css';
import CustomerRow from '../components/CustomerRow';

const Read = () => {

  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      // console.log(response)  
    setCustomerList(response.data); 
      
    }).catch(error => {
      console.log(error);
    });
  }, []);


  return (
    <div>
      <Link exact to="/create">Create</Link>
     <table>
       <thead>
         <tr>
         <th>
          <p className="list-category">First Name</p>
         </th>
          <th>
          <p className="list-category">Last Name</p>
          </th>
          <th>
          <p className="list-category">Phone</p>
          </th> 
          </tr>       
       </thead>
            
         {customerList.map(customer => (
            <CustomerRow 
              key={customer.customer_id} 
              id={customer.customer_id}
              firstName={customer.firstName} 
              lastName={customer.lastName} 
              phone={customer.phone} 
              email={customer.email}
            />
            )
          )
          }
        
        </table>
    </div>
  );
};

export default Read;