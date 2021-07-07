import React, { Component } from "react";
import "./MyComponent.css";
import MyDetail from "./MyDetail";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Md Ferdows Ohid Anu",
      age: 20,
      profession: "Software Engineer",
      show: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      age: this.state.age + 1,
    });
  };

  handleChange = (show) => {
    this.setState({
      ...this.state,
      show: show,
    });
  };

  componentDidMount() {
    console.log("componentdidmount from parent");
  }

  componentDidUpdate() {
    console.log("componentdidupdate from parent");
  }

  componentWillUnmount() {
    console.log("componentwillunmount from parent");
  }

  render() {
    console.log("render from parent");
    return (
      <div className="main">
        <button onClick={() => this.handleChange(true)}>show</button>
        <button onClick={() => this.handleChange(false)}>hide</button>
        {this.state.show && (
          <MyDetail
            name={this.state.name}
            age={this.state.age}
            profession={this.state.profession}
            handleClick={this.handleClick}
          />
        )}
      </div>
    );
  }
}

export default MyComponent;
