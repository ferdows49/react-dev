import React, { Component } from "react";

export default class MyDetail extends Component {
  componentDidMount() {
    console.log("componentdidmount from child");
  }

  componentDidUpdate() {
    console.log("componentdidupdate from child");
  }

  componentWillUnmount() {
    console.log("componentwillunmount from child");
  }

  render() {
    console.log("render from child");
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Age: {this.props.age}</h2>
        <h2>Profession: {this.props.profession}</h2>
        <button onClick={this.props.handleClick}>Click Me</button>
      </div>
    );
  }
}
