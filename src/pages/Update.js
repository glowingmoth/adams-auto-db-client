import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import CustomerUpdate from '../components/CustomerUpdate';

const Update = () => {

  const { id } = useParams();
  const [ customerDetails, setCustomerDetails] = useState({});

  useEffect(() => {
    Axios.get(`https://adams-autocare-db.herokuapp.com/read/${id}`).then(response => {
      setCustomerDetails(response.data[0]);
      console.log("axios.get: " + response.data[0].firstName + 'id: ' + id);
      
    }).catch(error => {
      console.log(error);
    });
  }, [id]);

  console.log('customerDetails:', customerDetails);


  return (
    <div>
      <CustomerUpdate 
        key={customerDetails.id}
        customerDetails={customerDetails}
         />
    </div>
  );
};

export default Update;