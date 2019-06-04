import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import routes from './routes.js';
import Nav from './Components/Nav/Nav';


class App extends Component{
  render(){
     return (
      <div className="App">
          <Router>
            <Nav />
            {routes}
          </Router>
        
    </div>
  );
     }
}

export default App;
