import React from 'react';
import { Link } from 'react-router-dom';
import '../CustomerDetails.css'



const CustomerDetails = (props) => {

  return (
    <div>
      <Link to={`/read`}>Back</Link>
      <div id="customer-details">
        First Name: {props.firstName}
      </div>
      <div>
        Last Name: {props.lastName}
      </div>
      <div>
        Phone: {props.phone}
      </div>
      <div>
        Email: {props.email}
      </div>

      <div>
        House Number: {props.houseNumber}
      </div>
      <div>
        Street: {props.street}
      </div>
      <div>
        Suburb: {props.suburb}
      </div>
      <div>
        City: {props.city}
      </div>
      Vehicle
      <div>
        Make:{props.make}
      </div>
      <div>
        Model: {props.model}
      </div>
      <div>
        Year: {props.year}
      </div>
    </div>
  );
};

export default CustomerDetails;