
import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Create from './pages/Create';
import Read from './pages/Read';
import Details from './pages/Details';
import PageNotFound from './pages/PageNotFound';


function App() {

  return (

    <div className="App">
      <h1>Adams</h1>
      <h3>AUTOCARE Database</h3>
      <Router>
        <Switch>
          <Redirect from ="/" to="/read" exact />
          <Route path="/create"  exact component={Create} />
          <Route path="/read"  exact component={Read} />
          <Route path="/read/:id"  exact component={Details} />
          <Route path="*"  exact component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
