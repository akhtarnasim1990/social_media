import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../Login/login.component";
import SignUp from "../Signup/signup.component";
import Navigation from '../Navigation/Navigation';
// import Home from '../Home/Home'
function Main() {
  return (<Router>
    {/* <Route path="/home" component={Homepg} /> */}
    <div className="Main">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrMainer">       
        <div className="auth-inner">
          <Switch>
          <Route path="/navigation"   component={Navigation} />
            <Route exact path='/' component={Login} />
            <Route path="/sign-in"  component={Login} />
            <Route path="/sign-up"   component={SignUp} />
            
            {/* <Route path="/home" component={Home} /> */}
          </Switch>
          
        </div> 
      </div>
    </div>
    </Router>
  );
}

export default Main;