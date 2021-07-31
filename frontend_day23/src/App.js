import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Day23 from "./Components/Day23";
import "./App.css";

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home show={false} />
          </Route>
          <Route exact path= "/About">
            
          </Route>
          <Route exact path="/day23">
            <Home dayNum="23" show={false} />
            <Day23 />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export const Home = ({ dayNum, show }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/More">More</Link>
            </li>
            <li>
              <Link to="/day23">day23</Link>
            </li>
          </ul>
        </nav>
        <div className="headerInfo">
          <h2 style={{ marginTop: "5px", color: "rgb(13 43 126)" }}>
            Devsnest THA 👽
          </h2>
          <h1
            style={{
              marginTop: "10px",
              color: "rgb(156 176 231)",
              visibility: show ? "" : "hidden"
            }}
          >
            This is Day {dayNum} Take Home Assignment
          </h1>
        </div>
      </header>
    </>
  );
};

export default App;
