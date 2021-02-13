import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom"

export default class SignUp extends Component {
    constructor (props) {
        super (props)
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            submitted: false
        }
    }

signUpHandler = () => {
    const data = {
        firstname: this.state.firstname ,
        lastname: this.state.lastname ,
        email: this.state.email ,
        password: this.state.password
    }
    this.setState({submitted: true})
    axios.post('/users' , data)
         .then(response => {
             console.log('response' , response);
             console.log('hi there')
             
         })
         .catch(error => {
             console.log(error)
         })

}

    render() {
        // const { firstname , lastname , email , password } = this.state
        let redirect = null;

        if (this.state.submitted) {
            redirect = <Redirect to="/sign-in" />
        }

        return (
            <form onSubmit={this.signUpHandler}>
                {redirect}
                {/* <Redirect to="/sign-in" /> */}
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control"                    placeholder="First name"
                    value={this.state.firstname}
                    onChange={(event) => this.setState({firstname:event.target.value})} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" 
                            className="form-control" 
                            placeholder="Last name"
                            value={this.state.lastname}
                            onChange={(event) => this.setState({lastname: event.target.value})} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                        <input type="email"             className="form-control"                            placeholder="Enter email"
                        value={this.state.email}
                        onChange={(event) => this.setState({email: event.target.value})} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                            className="form-control" 
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={(event) => this.setState({password: event.target.value})} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href=" ">sign in?</a>
                </p>
            </form>
        );
    }
}