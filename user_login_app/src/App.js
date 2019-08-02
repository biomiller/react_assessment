import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import {
  Col
} from 'reactstrap';

import { TopNavbar } from "./components/TopNavbar.js";
import { UserList } from "./components/UserList.js"
import { Register } from "./components/Register.js"
import { Login } from "./components/Login.js"




export class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: "Hello Guest",
      data: []
    }
  }

  getData = () => {
    axios
      .get("http://localhost:5000/user/all")
      .then(response => {
        this.setState({
          data: response.data.reverse()
        });
        console.log(this.state.data)
      });
  };

  userLoggedIn = (username) => {
    this.setState({
      loggedIn: "Hello " + username
    })
  }

  componentDidMount = () => {
    this.getData()
  }

  render() {
    return (
      <div>
        <Router>

          <TopNavbar loggedIn={this.state.loggedIn} />

          <Col md="3">
            <Route exact path={`/`} render={() => <h1>Home Page</h1>} />
            <Route exact path={`/ViewUsers`} render={() => <UserList data={this.state.data} />} />
            <Route exact path={`/Register`} render={() => <Register getData={this.getData} userLoggedIn={this.userLoggedIn} />} />
            <Route exact path={`/Login`} render={() => <Login getData={this.getData} userLoggedIn={this.userLoggedIn} />} />
          </Col>


        </Router>
      </div>
    );
  }
}

export default App;
