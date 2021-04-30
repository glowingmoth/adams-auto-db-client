import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const Create = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  let history = useHistory();

  const handleSubmit = () => {
    Axios.post('http://localhost:3001/create', {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email
    }).then(response => {
      alert('successfully inserted customer');
      history.push('/');
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };


  return (
    <div>
      <h1>Create</h1>

      <p>Customer Details</p>

     
        <div className="customerForm">
          <label>First Name: </label>
          <input type="text" name="firstName" onChange={(e) => {setFirstName(e.target.value)}}/>
        </div >
        <div className="customerForm">
          <label>Last Name: </label>
          <input type="text" name="lastName" onChange={(e) => {setLastName(e.target.value)}}/>
        </div>
        <div className="customerForm">
          <label>Phone Number: </label>
          <input type="text" name="phone" onChange={(e) => {setPhone(e.target.value)}}/>
        </div>
        <div className="customerForm">
          <label>Email: </label>
          <input type="text" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div>
          <p>Address</p>
        </div>
        <div>
          <label>House/Unit Number: </label>
          <input type="text" name="houseNumber"/>
        </div>
        <div>
          <label>Street: </label>
          <input type="text" name="street"/>
        </div>
        <div>
          <label>Suburb: </label>
          <input type="text" name="suburb"/>
        </div>
        <div>
          <label>City: </label>
          <input type="text" name="city"/>
        </div>

        <p>Vehicle Details</p>
        <div>
          <label>Make: </label>
          <input type="text" name="make"/>
        </div>
        <div>
          <label>Model: </label>
          <input type="text" name="model"/>
        </div>
        <div>
          <label>Year: </label>
          <input type="text" name="year"/>
        </div>

        <button type="submit" onClick={handleSubmit}>Create</button>

    </div>
  );
};

export default Create;