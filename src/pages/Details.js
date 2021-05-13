import React, { useEffect }from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import CustomerDetails from '../components/CustomerDetails';


const Details = () => {

  
  useEffect(() => {
    Axios.get('http://localhost:3001/read/:id').then((response) => {
      console.log(response)     
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <CustomerDetails />
    </div>
  );
};

export default Details;