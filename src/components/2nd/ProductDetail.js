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
    const {name, price, description, category} = this.props.currentProduct
    return (
      <div className="detail">
        {this.state.isLoading ? (
          <div className="loading"></div>
        ) : (
          <div className="details">
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <button onClick={() => this.props.backHome()}>Back to home</button>
          </div>
        )}
      </div>
    );
  }
}
