import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './Nav.css';

class Nav extends Component{

    render(){
        return(
            <div>
                <Link to="/dashboard">Home</Link>
                <Link to="/new">New Post</Link>
                <Link to="/">Logout</Link>
            </div>
        )
    }
}

export default connect(state => state)(Nav);