import React, { Component } from 'react';
import axios from "axios";

import {
    Button
} from 'reactstrap';


export class Login extends Component {

    constructor() {
        super();
        this.state = {
            password: "",
            username: "",
            login:""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let username = e.target[0].value
        let password = e.target[1].value

        axios
            .get(`http://localhost:5000/user/name/${username}/${password}`)
            .then(response => {
                if (response.data.Status === "Not Logged In") {
                    this.setState({
                        username: "",
                        password: "Incorrect password."
                    });
                } else if (response.data.Status === "Logged In"){
                    this.props.userLoggedIn(username);
                    this.setState({
                        username: "",
                        password: "",
                        login: "Successfully logged in."
                    });
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    username: "User not found.",
                    password: ""
                })
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <h1>Login</h1>

                <input required type="text" placeholder="Username"></input>
                <p>{this.state.username}</p>

                <input required type="password" placeholder="Password"></input>
                <p>{this.state.password}</p>

                <Button type="submit">Submit</Button>
                <br></br>
                <p>{this.state.login}</p>


            </form>

        );
    }
}