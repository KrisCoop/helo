import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Dashboard.css';

class Dashboard extends Component{

    render(){
        return(
            <div>Dashboard</div>
        )
    }
}

export default connect(state => state)(Dashboard);