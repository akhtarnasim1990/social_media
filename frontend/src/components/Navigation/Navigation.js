import React , { Component } from 'react';
import {Link , BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import AddPost from '../addPost/addPost';
import Posts from '../../container/Posts/Posts';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';



import classes from './Navigation.css';

class Navigation extends Component {
    render () {
        return (
            <div>
               
            <Router>
            <div className={classes.Navigation}>
            <h1>Welcome!</h1>
                <header >
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"> 
                                <Link className="nav-link" to={"/home"}>Home </Link>
                                </li>
                                <li className="nav-item"> 
                                <Link className="nav-link" to={"/allpost"}>Posts </Link>
                                </li>
                                <li className="nav-item"> 
                                <Link className="nav-link" to={"/addPost"} >addPost </Link>
                                </li>
                                <li className="nav-item">
                                     <Link className="nav-link" to={"/profile"}>Profile </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/allpost" component={Posts} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/addPost" component={AddPost} />
                </Switch>
                
            </div>
            </Router>
            </div>
        )
    }
}

export default Navigation;