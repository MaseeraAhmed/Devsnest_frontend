import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from "./route/Home";
import About from "./route/About";
import Profile from "./route/Profile";
import Dashboard from "./route/Dashboard";

import {AuthContext} from "./context/AuthContext";

function App() {
  return (
    <div className='app'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
