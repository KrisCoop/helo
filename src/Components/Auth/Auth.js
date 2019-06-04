import React, { Component } from 'react';

import './Auth.css';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            pasword: ""
        }
    }

    updateInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
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
                </div>
            </div>
        )
    }
}

export default Auth;