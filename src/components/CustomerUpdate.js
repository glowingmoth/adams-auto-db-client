import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';

const CustomerUpdate = ({customerDetails}) => {

  const { id } = useParams();
  const history = useHistory();

  const initialFormState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    houseNumber: '',
    street: '',
    suburb: '',
    city: '',
    make: '',
    model: '',
    year: ''
  };

  const [currentDetails, setCurrentDetails] = useState(initialFormState);

  useEffect(() => {
    console.log('currentDetails:', currentDetails);
    customerDetails && setCurrentDetails(customerDetails);
  }, [customerDetails]);

  const handleUpdate = () => {
    Axios.put(`http://localhost:3001/update/${id}`, {}).then(response => {
      alert('Successfully updated customer details');
      history.push(`/read/${id}`)
    });
  };

  const handleChange = (e) => {
    setCurrentDetails({...currentDetails, [e.target.name]: e.target.value});
    console.log(e.target)
  };

  console.log('please render:', currentDetails);


  return (
    <div className="form">
      <Link to={`/read/${id}`}>Back</Link>
      <p className="category">Customer Details</p>

        <div className="form-item">
          <label>First Name </label>
          <input type="text" value={currentDetails.firstName} name="firstName" onChange={handleChange}/>
        </div >

        <div className="form-item">
          <label>Last Name </label>
          <input type="text" value={currentDetails.lastName} name="lastName" onChange={handleChange}/>
        </div>
        <div className="form-item">
          <label>Phone </label>
          <input type="text" value={currentDetails.phone} name="phone" onChange={handleChange}/>
        </div>
        <div className="form-item">
          <label>Email </label>
          <input type="text" value={currentDetails.email} name="email" onChange={handleChange}/>
        </div>
        
          <p className="category">Address</p>
  
        <div className="form-item">
          <label>Number </label>
          <input type="text" value={currentDetails.houseNumber} name="houseNumber" onChange={handleChange}/>
        </div>
        <div className="form-item">
          <label>Street </label>
          <input type="text" value={currentDetails.street} name="street" onChange={handleChange}/>
        </div> 
        <div className="form-item">
          <label>Suburb </label>
          <input type="text" value={currentDetails.suburb} name="suburb" onChange={handleChange}/>
        </div>
        <div className="form-item">
          <label>City </label>
          <input type="text" value={currentDetails.city} name="city" onChange={handleChange}/>
        </div>

        <p className="category">Vehicle Details</p>
        <div className="form-item">
          <label>Make </label>
          <input type="text" value={currentDetails.make} name="make" onChange={handleChange}/>
        </div>
        <div className="form-item">
          <label>Model </label>
          <input type="text" value={currentDetails.model} name="model" onChange={handleChange}/>
        </div>
        <div className="form-item">
          <label>Year </label>
          <input type="text" value={currentDetails.year} name="year" onChange={handleChange}/>
        </div>

        <button type="submit" onClick={handleUpdate}>Update</button>

    </div>
  );
};

export default CustomerUpdate;