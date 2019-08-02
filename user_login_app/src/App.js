import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import { TopNavbar } from "./components/TopNavbar.js";
import { UserList } from "./components/UserList.js"
import { Register } from "./components/Register.js"



class App extends Component {

  constructor() {
    super();
    this.state = {
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

  componentDidMount = () => {
    this.getData()
  }

  render() {
    return (
      <div>
        <Router>

          <TopNavbar />

          <Route exact path={`/`} render={() => <h1>Home Page</h1>} />
          <Route exact path={`/ViewUsers`} render={() => <UserList data={this.state.data} />} />
          <Route exact path={`/Register`} render={() => <Register getData={this.getData} />} />



        </Router>
      </div>
    );
  }
}

export default App;
