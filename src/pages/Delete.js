import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';


const Delete = () => {

    const { id } = useParams();
    const history = useHistory();
    const [customerDetails, setCustomerDetails] = useState({}); 

    // const [firstName, lastName] = customerDetails; 
    
    useEffect( () => {
        Axios.get(`http://localhost:3001/read/${id}`).then(response => {
            setCustomerDetails(response.data[0]);
        }).catch(error => {
            console.log(error);
        }); 
    }, [id]);


    const handleDelete = () => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
            alert('Customer Successfully Deleted');
        }).catch(error => {
            console.log(error);
        });
        history.push('/read');
    }
    

  return (
    <div>
        <Link to={`/read/${id}`}>Back</Link>
     <div>
         {/* {customerDetails.map(customer => (
             <li>{customer}</li>
         ))} */}
         Are you sure you would like to delete {customerDetails.firstName} {customerDetails.lastName}'s record?<button onClick={handleDelete}>Delete</button>
     </div>
    </div>
  );
};

export default Delete;