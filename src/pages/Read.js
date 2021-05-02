import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../Read.css';
import CustomerRow from '../components/CustomerRow';

const Read = () => {

  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      console.log(response)  
    setCustomerList(response.data); 
      
    }).catch(error => {
      console.log(error);
    });
  }, []);


  return (
    <div>
     <table>
       <thead>
         <tr>
         <th>
          First Name
         </th>
          <th>
            Last Name
          </th>
          <th>
            Phone
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
            />
            )
          )
          }
        
        </table>
    </div>
  );
};

export default Read;