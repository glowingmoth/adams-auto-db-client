import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import '../CustomerCreation.css';

const CustomerCreation = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [suburb, setSuburb] = useState('');
  const [city, setCity] = useState('');

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const history = useHistory();

  const handleSubmit = () => {
    Axios.post('http://localhost:3001/create', {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      houseNumber: houseNumber,
      street: street,
      suburb: suburb,
      city: city,
      make: make,
      model: model,
      year: year
    }).then(response => {
      alert('successfully inserted customer');
      history.push('/read');
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };


  return (
    <div className="form">
      <p>Customer Details</p>

        <div className="form-item">
          <label>First Name: </label>
          <input type="text" onChange={(e) => {setFirstName(e.target.value)}}/>
        </div >

        <div className="form-item">
          <label>Last Name: </label>
          <input type="text" onChange={(e) => {setLastName(e.target.value)}}/>
        </div>
        <div className="form-item">
          <label>Phone Number: </label>
          <input type="text" onChange={(e) => {setPhone(e.target.value)}}/>
        </div>
        <div className="form-item">
          <label>Email: </label>
          <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        
          <p>Address</p>
  
        <div className="form-item">
          <label>House Number: </label>
          <input type="text" onChange={(e) => {setHouseNumber(e.target.value)}}/>
        </div>
        <div className="form-item">
          <label>Street: </label>
          <input type="text" onChange={(e) => {setStreet(e.target.value)}}/>
        </div> 
        <div className="form-item">
          <label>Suburb: </label>
          <input type="text" onChange={(e) => {setSuburb(e.target.value)}}/>
        </div>
        <div className="form-item">
          <label>City: </label>
          <input type="text" onChange={(e) => {setCity(e.target.value)}}/>
        </div>

        <p>Vehicle Details</p>
        <div className="form-item">
          <label>Make: </label>
          <input type="text" onChange={(e) => {setMake(e.target.value)}}/>
        </div>
        <div className="form-item">
          <label>Model: </label>
          <input type="text" onChange={(e) => {setModel(e.target.value)}}/>
        </div>
        <div className="form-item">
          <label>Year: </label>
          <input type="text" onChange={(e) => {setYear(e.target.value)}}/>
        </div>

        <button type="submit" onClick={handleSubmit}>Create</button>

    </div>
  );
};

export default CustomerCreation;