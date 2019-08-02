import React, { Component } from 'react';
import axios from "axios";

import {
    Button
} from 'reactstrap';


export class Register extends Component {


    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            password2: "",
            username: "",
            status:""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let username = e.target[0].value
        let email = e.target[1].value
        let password = e.target[2].value
        let password2 = e.target[3].value

        let newUser = {
            username: username,
            email: email,
            password: password,
            password2: password2

        }

        axios
            .post("http://localhost:5000/user/createUser", newUser)
            .then(response => {
                console.log(response);
                if (response.data.Status === "Account successfully created") {
                    this.props.userLoggedIn(username);
                    this.setState({
                        status:"Successfully created new user: " + username
                    })

                } else {
                    this.setState({
                        username: response.data.username,
                        email: response.data.email,
                        password: response.data.password,
                        password2: response.data.password2,
                    })
                }
            })
            .catch(err => { console.log(err) })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input required type="text" placeholder="Username"></input>
                <p>{this.state.username}</p>

                <input required type="email" placeholder="email"></input>
                <p>{this.state.email}</p>

                <input required type="password" placeholder="Password"></input>
                <p>{this.state.password}</p>

                <input required type="password" placeholder="Repeat Password"></input>
                <p>{this.state.password2}</p>

                <Button type="submit">Submit</Button>

                <br></br>
                <p>{this.state.status}</p>

            </form>

        );
    }
}