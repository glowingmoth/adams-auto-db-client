
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Login from './pages/Login';
// import Menu from './pages/Menu';
import Create from './pages/Create';
import Read from './pages/Read';
import Update from './pages/Update';
import Delete from './pages/Delete';
import Customer from './pages/Customer';


function App() {

  return (
    <div className="App">
      <h1>Adams Auto Care Database</h1>
      <Router>
        <Link to="/create">Create</Link>
        <Link to="/read">Read</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>

        <Switch>
          <Route path="/" exact />
          <Route path="/create"  component={Create} />
          <Route path="/read"  exact component={Read} />
          <Route path="/update"  component={Update} />
          <Route path="/delete"  component={Delete} />
          <Route path="/read/:id"  component={Customer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
