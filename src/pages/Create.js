import CustomerCreation from '../components/CustomerCreation';
import { Link } from 'react-router-dom';

const Create = () => {

  return (
    <div>
      <Link exact to="/read">Back</Link>
      <CustomerCreation />
    </div>
  );
};

export default Create;