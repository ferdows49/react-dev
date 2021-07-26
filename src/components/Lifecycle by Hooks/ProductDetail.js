import React, {useState, useEffect} from 'react';
import './Product.css'

const ProductDetail = (props) => {
    const {name, price, description, category} = props.currentProduct
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1500);
    }, []);

    
    return (
      <div className="detail">
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          <div className="details">
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <button onClick={() => props.backHome()}>Back to home</button>
          </div>
        )}
      </div>
    );
}

export default ProductDetail
