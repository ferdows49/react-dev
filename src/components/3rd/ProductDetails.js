import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dummy_Products from "./ProductData";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();
  const currentProduct = Dummy_Products.find((prod) => prod.id === productId);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <div className="detail">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div className="details">
          <p>Name: {currentProduct.name}</p>
          <p>Price: ${currentProduct.price}</p>
          <p>Description: {currentProduct.description}</p>
          <p>Category: {currentProduct.category}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
