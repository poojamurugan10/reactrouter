import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            inCart={cart.some((item) => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
