import React, { useState, useEffect } from "react";
import Dummy_Products from "./ProductData";
import { NavLink } from "react-router-dom";
import "./Products.css";

const Products = () => {
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
          {Dummy_Products.map((product) => {
            return (
              <NavLink
                to={`/product-details/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="product-card" key={product.id}>
                  <h3>{product.name}</h3>
                  <h3>${product.price}</h3>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
