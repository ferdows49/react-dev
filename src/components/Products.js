import React, { Component } from "react";
import Product from "./Product";
import "./Product.css";
import ProductDetail from "./ProductDetail";

export default class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Iphone 12 pro",
      description: "6.7 inch retina display",
      price: "1100",
      category: "",
      isLoading: false,
    };
  }

  handleClick = (isLoading) => {
    this.setState({
      ...this.state,
      isLoading: isLoading,
    });
  };

  render() {
    return (
      <div>
        <div onClick={() => this.handleClick(true)}>
          {this.state.isLoading ? (
            <div>
              <ProductDetail description={this.state.description} />
            </div>
          ) : (
            <>
              <Product name={this.state.name} price={this.state.price} />
            </>
          )}
        </div>
      </div>
    );
  }
}
