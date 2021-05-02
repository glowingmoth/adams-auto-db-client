import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Login.css';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("")

  const history = useHistory();

  const adminLogin = () => {
    if (username === "adam" && password === "123456") {
      history.push('/read');
    }
  };

  

  return (
    <div id="login">
      <div>
        Username: 
        <input type="text" onChange={(e) => {
          setUsername(e.target.value)
          }}>
        </input>
      </div>
      <div>
        Password: 
        <input type="text" onChange={(e) => {
          setPassword(e.target.value)
          }}>
        </input>
      </div>
      <button onClick={adminLogin}>Login</button>
      <div>
      </div>
    </div>
  );
};

export default Login;
