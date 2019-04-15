import React, { Component } from "react";
import Counter from "./counter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    fetch("/userCount")
      .then(res => res.json())
      .then(count => {
        this.setState(count)
      });
  }

  addUser(username) {
    fetch("/addUser", {
      method: "POST",
      body: username
    })
      .then(res => res)
      .then(count => this.setState(count));
  }

  render() {
    return <Counter count={this.state.count} onclick={this.addUser.bind(this)} />;
  }
}

export default App;
