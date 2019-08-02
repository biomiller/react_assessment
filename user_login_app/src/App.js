import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import {
  Col,
  Row
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
          <Row>
          <TopNavbar loggedIn={this.state.loggedIn} />
          </Row>

          <Row>
          <Col sm="12" md={{ size: 6, offset: 6 }}>
            <Route exact path={`/`} render={() => <h1>Home Page</h1>} />
            <Route exact path={`/ViewUsers`} render={() => <UserList data={this.state.data} />} />
            <Route exact path={`/Register`} render={() => <Register getData={this.getData} userLoggedIn={this.userLoggedIn} />} />
            <Route exact path={`/Login`} render={() => <Login getData={this.getData} userLoggedIn={this.userLoggedIn} />} />
          </Col>
          </Row>


        </Router>
      </div>
    );
  }
}

export default App;
