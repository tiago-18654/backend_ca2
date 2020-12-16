import React, { Component } from 'react';
//import the Link component to handle React Router
import { Link } from 'react-router-dom';
import { Level } from "react-bulma-components";
import Boss from './Boss';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';
import './app.css';
// import stylesheet 
//MAKE SURE TO INSTALL USING npm install bulma
import 'bulma/css/bulma.css';

// this component will handle the search component
class SearchBoss extends Component {
    constructor(props) {
        super(props);
        // store the related to the boss information into the state
        // these should match the boss object from the API
        this.state = {
            level: '',
            name: '',
            cruel: '',
            weapon: '',
            picture: ''
        };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.handleChange = this.handleChange.bind(this);
    }

    //once the input boxes are changed, update the state to match the value
    handleChange(event) {
        //name of the input boxes must match the property names in the state
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    render() {

        //Create a input field here it is possible to search the bosses by name
        return (
            <div className="is-fluid">
                {/*Navigation bar*/}
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
                <hr />
                <article className="message is-warning">
                    <div className="message-header has-text-centered">
                        <h1 className="content title has-text-centered">List of BOSSES</h1>
                    </div>
                    <hr />                    
                    <div className="message-body">
                        {/*Boss LIST*/}
                        <div>
                            <div className="columns is-multiline">
                                <label className="label">
                                    Name:
                                </label>
                                <div className="control">
                                    <input className="input is-small" type="text" name="name" value={this.state.name} onChange={this.handleChange} id="form" />
                                    &nbsp; &nbsp;
                                    {/*The search button. Call the boss-list component passing the name */}
                                    <Link to={`/boss-list/${this.state.name}`}>
                                        <button className="button is-warning" type="button">
                                            Search
                                        </button>
                                    </Link>
                                </div>                                    
                            </div>
                            <hr />
                        </div>
                    </div>
                </article>
                {/*FOOTER*/}
                <footer className="footer has-background-primary">
                    <div className="content has-text-centered">
                        <p className="has-text-white-bis"><strong>Random Boss API</strong> styled with Bulma.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default SearchBoss;
