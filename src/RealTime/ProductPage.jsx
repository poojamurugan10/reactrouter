import React from "react";
import ProductList from "../components/ProductList";

const ProductPage = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <ProductList
      products={products}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
};

export default ProductPage;
