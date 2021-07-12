import React, { Component } from "react";
import Product from "./Product";
import "./Product.css";
import ProductDetail from "./ProductDetail";

export default class products extends Component {
  constructor(props) {
    console.log('products constructor')
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Iphone 12 pro",
          description: "6.7 inch retina display",
          price: "1100",
          category: "smartphone",
        },
        {
          id: 2,
          name: "Samsung note 20",
          description: "6.9 inch superamoled display",
          price: "1000",
          category: "smartphone",
        },
        {
          id: 3,
          name: "Oneplus 7 pro",
          description: "6.7 inch amoled display",
          price: "800",
          category: "smartphone",
        },
      ],
      currentProduct: null
    };
  }

  handleClick = (data) => {
    this.setState({
      ...this.state,
      currentProduct: data
    });
  };

  backHome = () => {
    this.setState({
      currentProduct: null
    })
  };

  render() {
    return (
      <div>
        {this.state.currentProduct !== null ? (
          <ProductDetail
            currentProduct={this.state.currentProduct}
            backHome = {this.backHome}
          />
        ) : (
          <Product
            products={this.state.products}
            handleClick={this.handleClick}
          />
        )}
      </div>
    );
  }
}
