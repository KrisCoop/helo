import React, { Component } from 'react';

import './Auth.css';
import axios from 'axios';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: ""
        }
    }

    updateInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    registerUser = () => {
        let newUser = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/Auth/Register', newUser)
        this.props.history.push('/dashboard');
    }

    loginUser = () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/Auth/Login', user);
        this.props.history.push('/dashboard');
    }

    render(){
        return(
            <div className="Register">
                <div className="RegisterArea">
                    <h1 className="rHeader">Username / Password:</h1>
                        <div className="inputBars">
                            <label>Username: <input className="Username" placeholder="Username" name="username" value={this.state.username} onChange={this.updateInput}></input></label>
                            <label>Password: <input className="Password" placeholder="Password" name="password" value={this.state.password} onChange={this.updateInput}></input></label>
                        </div>
                        <button className="Login" onClick={() => {this.loginUser}}>Login</button>
                        <button className="Register" onCLick={() => {this.registerUser}}>Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;