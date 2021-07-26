import React, { useState } from "react";
import Product from "./Product"
import ProductDetail from "./ProductDetail";

const Dummy_Products = [
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
];

const Products = () => {
  const [products] = useState(Dummy_Products);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleClick = (data) => {
    setCurrentProduct(data)
  };

  const backHome = () => {
    setCurrentProduct(null)
  };

  return (
    <div>
      {currentProduct !== null ? (
        <ProductDetail currentProduct={currentProduct} backHome={backHome} />
      ) : (
        <Product products={products} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Products;
