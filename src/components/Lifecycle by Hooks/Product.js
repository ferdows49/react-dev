import React, { useState, useEffect } from "react";
import "./Product.css";

const Product = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div>
          {props.products.map((product) => {
            return (
              <div
                className="product-card"
                key={product.id}
                onClick={() => props.handleClick(product)}
              >
                <h3>{product.name}</h3>
                <h3>${product.price}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Product;
