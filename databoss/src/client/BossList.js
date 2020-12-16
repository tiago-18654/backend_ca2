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

// this component will handle all elements in the bosses array
class BossList extends Component {
    constructor(props) {
        super(props);
        // store the bosses array in the state
        this.state = { bosses: [] };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.updateBosses = this.updateBosses.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // fetch all boss data from the server when the component mounts
    componentDidMount() {
        if(undefined === this.props.match.params.name){
            console.log("without params")
            this.updateBosses();
        } else {            
            console.log("with params - Search Component")
            axios.get('/api/bosses/' + this.props.match.params.name)
            .then(response => {
                console.log("Feeding the bosses")
                //on resonse set the state values to match empty state values set in the constructor
                this.setState({ bosses: response.data });
                console.log(response.data.level)
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    updateBosses() {
        // get the bosses API using axios GET request to the server 
        axios.get('api/boss')
            .then(response => {
                //store the response in the state
                this.setState({ bosses: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDelete(id) {
        // make a DELETE request to the server which will handle the removal of the boss with the specific bossId
        axios
            .delete('api/boss', {
                data: {
                    id: id
                }
            })
            .then(response => {
                //if the deletion was successful then re-render the list of boss
                this.updateBosses();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // produce a Boss component for each boss object
        const bossList = this.state.bosses.map(u => (
            //map through each element in the array and set to the value received from the server
            <Boss
                key={u._id}
                id={u._id}
                level={u.level}
                name={u.name}
                cruel={u.cruel}
                image={u.picture}
                weapon={u.weapon}
                //you must include the handleDelete method to use in child components
                handleDelete={this.handleDelete}
            />
        ));

        //return the list of bosses
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
                    <div className="message-body">
                        {/*Boss LIST*/}
                        <div>
                            <div className="columns is-multiline">
                                {bossList}
                            </div>
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

export default BossList;
