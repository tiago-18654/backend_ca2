import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Level } from "react-bulma-components";
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';

//Create Boss component that will create a new boss card
class CreateBoss extends Component {
    constructor(props) {
        super(props);
        // the form fields are stored in a state
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //once the input boxes are changed, update the state to match the value
    handleChange(event) {
        //name of the input boxes must match the property names in the state
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        //preventDefault() is called on the event when it occurs to prevent a browser reload/refresh
        event.preventDefault();

        //use axios to send a POST request to the server which includes the state information for the new boss to be created
        axios.post('/api/boss', this.state)
            //on success go to home
            .then(res => this.props.history.push('/'))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // remember that the name of the input fields should match the state
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
                {/*on form submit call handleSubmit()*/}
                <form onSubmit={this.handleSubmit}>
                    <article className="message is-warning">
                        <div className="message-header has-text-centered">
                            <h1 className="content title has-text-centered">New Boss</h1>
                        </div>
                        <div className="message-body">
                            <hr />
                            {/*main container for input fields*/}
                            <div className="container">
                                {/*FIRST COLUMN*/}
                                <div className="columns">
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label"> Level: </label>
                                            <div className="control">
                                                <input className="input is-small" type="text" name="level" value={this.state.level} onChange={this.handleChange} id="form" />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"> Name: </label>
                                            <div className="control">
                                                <input className="input is-small" type="text" name="name" value={this.state.name} onChange={this.handleChange} id="form" />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"> Picture: </label>
                                            <div className="control">
                                                <input className="input is-small" type="text" name="picture" value={this.state.picture} onChange={this.handleChange} id="form" />
                                            </div>
                                        </div>
                                    </div>
                                    {/*SECOND COLUMN*/}
                                    <div className="column">
                                        <div className="field">
                                            <label className="label"> Cruel: </label>
                                            <div className="control">
                                                <input className="input is-small" type="text" name="cruel" value={this.state.cruel} onChange={this.handleChange} id="form" />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"> Weapon: </label>
                                            <div className="control">
                                                <input className="input is-small" type="text" name="weapon" value={this.state.weapon} onChange={this.handleChange} id="form" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*SUBMIT BUTTON*/}
                                <input className="button is-primary is-warning" type="submit" value="Submit" />
                            </div>
                        </div>
                    </article>
                    <hr />
                    <footer className="footer has-background-primary">
                        <div className="content has-text-centered">
                            <p className="has-text-white-bis"><strong>Random Boss API</strong> styled with Bulma.</p>
                        </div>
                    </footer>
                </form>
            </div>
        );
    }
}

export default CreateBoss;
