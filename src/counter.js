import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <form action="/addUser" method="POST">
          <input type="text" name="username"/>
          <input type="submit" value="add user"/>
        </form>
      </div>
    );
  }
}
