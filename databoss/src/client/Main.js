import React, { Component } from 'react';
//import the Link component to handle React Router
import { Link } from 'react-router-dom';
import { Level } from "react-bulma-components";
import Boss from './Boss';
import SearchBoss from './SearchBoss';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';
import './app.css';
// import stylesheet 
//MAKE SURE TO INSTALL USING npm install bulma
import 'bulma/css/bulma.css';

// this component will give a welcome to the users
class Main extends Component {

    render() {

        //Main screen. Give the welcome to the users
        return (
            <div className="is-fluid">
                {/*Navigation bar - appear in all the screens. I would like to use modal for that but 
                i could not find a nice example*/}
                <Level renderAs="nav">
                    <Level.Item textAlignment="centered">
                        <Link to={'/'} className="navbar-item navbar-centered">
                            <button className="button is-warning" type="button">Main Screen</button>
                        </Link>
                    </Level.Item>
                    <Level.Item textAlignment="centered">
                        <Link to={'/create-boss'} className="navbar-item navbar-centered">
                            <button className="button is-warning" type="button">Create new BOSS</button>
                        </Link>
                    </Level.Item>
                    <Level.Item textAlignment="centered">
                        <Link to={'/boss-list'} className="navbar-item navbar-centered">
                            <button className="button is-warning" type="button">See your BOSSES</button>
                        </Link>
                    </Level.Item>
                    <Level.Item textAlignment="centered">
                        <Link to={'/search-boss'} className="navbar-item navbar-centered">
                            <button className="button is-warning" type="button">Search for a BOSS</button>
                        </Link>
                    </Level.Item>
                </Level>
                {/*Message style from the bulma. I used this for create a pattern in my application*/} 
                <article className="message is-warning">
                    <div className="message-header has-text-centered">
                        <h1 className="content title has-text-centered">Welcome to BOSS database</h1>                        
                    </div>
                    <div className="message-body">
                        Hi <strong><em>boss creater</em></strong>.<br />
                        Here you will find a security place to insert, edit and delete your <strong>bosses</strong>. <br />
                        Be free to use all of our application. <br /><br />
                        Best Regards <br /><br /><br />
                        <strong>Sephiroth </strong>
                        <img src="../src/image/Sephiroth.png" alt="Sephiroth" width="150" />
                    </div>
                </article>
                <hr />
                <footer className="footer has-background-primary">
                    <div className="content has-text-centered">
                        <p className="has-text-white-bis"><strong>Random Boss API</strong> styled with Bulma.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Main;
