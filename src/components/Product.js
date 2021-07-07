import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="product-card">
          <h1>{this.props.name}</h1>
          <h3>${this.props.price}</h3>
        </div>
      </div>
    );
  }
}

export default Product;
