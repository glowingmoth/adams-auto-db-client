import React, { useEffect, useState }from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import CustomerDetails from '../components/CustomerDetails';


const Details = () => {

  const [customerDetails, setCustomerDetails] = useState({});
  const { id } = useParams(); 
  
  useEffect(() => {
    Axios.get(`http://localhost:3001/read/${id}`).then((response) => {
      setCustomerDetails(response.data[0]);
      console.log(response.data);
      console.log(customerDetails.firstName)
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <CustomerDetails 
        key={customerDetails.id}
        firstName={customerDetails.firstName}
        lastName={customerDetails.lastName}
        phone={customerDetails.phone}
        email={customerDetails.email}
        houseNumber={customerDetails.houseNumber}
        street={customerDetails.street}
        suburb={customerDetails.suburb}
        city={customerDetails.city}
      />
    </div>
  );
};

export default Details;