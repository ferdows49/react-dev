import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import Welcome from "./Welcome";
import Error from "./Error";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
