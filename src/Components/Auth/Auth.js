import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        .then((response)=>{
            if(response.data.success){
                this.props.dispatch({ //This object is our 'action'
                    type:'user',
                    payload: response.data.user,
                })
                this.props.history.push('/dashboard');
            }else{
                alert('bad credentials')
            }
        })
    }

    loginUser = () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/Auth/Login', user)
            .then((response)=>{
                //checking to see if login was successfull
                if(response.data.success){
                    //dispatches user object to redux store.
                    this.props.dispatch({
                        type:'user',
                        payload: response.data.user,
                    })
                    //push them to dashboard view..
                    this.props.history.push('/dashboard')
                }else{
                alert('bad credentials')
            }});
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