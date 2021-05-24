import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../styles/Read.css';
import CustomerRow from '../components/CustomerRow';

const Read = () => {

  const [customerList, setCustomerList] = useState([]);
  const [alphabetiseList, setAlphabetiseList] = useState([]);
  const [numericalList, setNumericalList] = useState([]);
  const [changed, setChanged ] = useState()

  useEffect(() => {
    Axios.get('https://adams-autocare-db.herokuapp.com/read').then((response) => {
      // console.log(response)  
      setCustomerList(response.data); 
   
    }).catch(error => {
      console.log(error);
    });
  }, [changed]);

  const handleNumerical = () => {
    setNumericalList(customerList.sort((a, b) => (a.customer_id > b.customer_id ? 1 : -1)));
    setChanged(false)
  };

  const handleAlphabetize = () => {
    setAlphabetiseList(customerList.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)));
    setChanged(true)
  };

  return (
    <div>
      <Link exact to="/create">Create</Link>
     <button onClick={handleAlphabetize}>Alphabetise</button>
     <button onClick={handleNumerical}>Numerical</button>
     <table>
       <thead>
         <tr>
           <th>
           <p className="list-category">Customer Id</p>
           </th>
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