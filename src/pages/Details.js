import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import CustomerDetails from '../components/CustomerDetails';



const Details = () => {

  const [customerDetails, setCustomerDetails] = useState({});
  const { id } = useParams(); 
  
  useEffect(() => {
    Axios.get(`https://adams-autocare-db.herokuapp.com/read/${id}`).then(response => {
      setCustomerDetails(response.data[0]);
    }).catch(error => {
      console.log(error);
    });
  }, [id]);


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