import axios from "axios";
import React, { Component } from "react";
import { Redirect , Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'

export default class Login extends Component {

    state = {
        email : '',
        password: '',
        loged: false
    }

    loginHandler = () => {
        const data = {
            email: this.state.email ,
            password: this.state.password
        }
        this.setState({loged: true})
        axios.post('/users/login' ,  data)
            .then(response => {
                localStorage.setItem('token' , JSON.stringify(response.data.token))
                // this.props.history.replace('/navigation');
                console.log( response)
            })
    }

    render() {
        let redirect = null;

        if (this.state.loged) {
            redirect = <Redirect to="/navigation" />
        }
        return (
            <div>
            <form onSubmit={this.loginHandler}>
                {redirect}
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    value={this.state.email}
                    onChange={(event) => this.setState({email: event.target.value})} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                    value={this.state.password}
                    onChange={(event) => this.setState({password: event.target.value})} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"
                >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href=" ">password?</a>
                </p>
            </form>
            <Route  path="/navigation" component={Navigation} />
            </div>
        );
    }
}