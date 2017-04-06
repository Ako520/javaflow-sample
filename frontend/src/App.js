/* @flow */
import React, { Component } from 'react';
import * as userService from './user.js';
import type {User} from "./ApiFlow";

type State = { users: Array<User> };

class App extends Component {

  state: State = {users: []};

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const users = await userService.all();
    this.setState({users});
  }

  render() {
    let {users} = this.state;
    return (
      <ul>
        {users.map(({firstName, lastName}, i) => (
           <li key={i}>{firstName} {lastName}</li>
         ))
        }
      </ul>
    );
  }
}

export default App;
