import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
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
      <div>
        {this.state.isLoading ? <div className="loading"></div> : (
          <div>
            {this.props.products.map((product) => (
              <div
                className="product-card"
                key={product.id}
                onClick={() => this.props.handleClick(product)}
              >
                <h1>{product.name}</h1>
                <h3>${product.price}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Product;
