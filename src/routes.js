import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth.js';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

export default (
    <Switch>
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Form} path="/new" />
        <Route component={Post} path="/post/:postid" />
        <Route component={Auth} path="/" />
    </Switch>
)

// I'm unsure if the links I set up in the "path=" should be lower case or not