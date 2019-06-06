require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js');
import { HashRouter as Router, Link } from 'react-router-dom';
import Axios from 'axios';

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
        .then((dbInstance) => {
            console.log('db is connected');
            app.set('db', dbInstance)
        })
        .catch((err) => {
            console.log(`Man you is have broken server guy: ${err}`)
        })


app.post('/Auth/Register', controller.register);
app.post('/Auth/Login', controller.login);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});