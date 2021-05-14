import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PageNotFound.css';

const PageNotFound = () => {

  return (
    <div>
      How'd you end up here?
      <div>
        
      </div>
      <div>
      <Link exact to="/">Take me home.</Link>
      </div>
    </div>
  );
};

export default PageNotFound;