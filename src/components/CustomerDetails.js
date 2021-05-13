import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CustomerDetails.css';



const CustomerDetails = (props) => {
  console.log(props)
  return (
    <div>
      <Link to={`/read`}>Back</Link>
      <div id="customer-details-wrapper">

      <p className="category">Customer</p>
        <div className="customer-details">
          <p>{props.firstName} &nbsp;{props.lastName}</p>
        </div>

        <div className="customer-details">
          <p>{props.phone}</p>
        </div>
        
        <div className="customer-details">
          <p>{props.email}</p>
        </div>

        <p className="category">Address</p>

        <div className="customer-details">
          <p>{props.houseNumber} &nbsp;{props.street} Street</p>
        </div>

        <div className="customer-details">
          <p>{props.suburb}</p>
        </div>

        <div className="customer-details">
          <p>{props.city}</p>
        </div >

        <p className="category">Vehicle</p>
        
        <div className="customer-details">
          <p>Make:</p><p>{props.make}</p>
        </div>

        <div className="customer-details">
          <p>Model:</p> <p>{props.model}</p>
        </div>

        <div className="customer-details">
          <p>Year:</p> <p>{props.year}</p>
        </div>
        <button className="button edit">Edit</button>
        <button className="button delete">Delete</button>
      </div>
    </div>
  );
};

export default CustomerDetails;