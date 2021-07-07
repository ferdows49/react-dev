import React, { Component } from "react";
import "./Product.css";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
  }

  render() {
    return (
      <div className="detail">
        {this.state.isLoading ? (
          <div className="loading"></div>
        ) : (
          <p>{this.props.description}</p>
        )}
      </div>
    );
  }
}
