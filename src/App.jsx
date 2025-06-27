import React, { useEffect, useState } from "react";
import Navbar from "./RealTime/NavBar";
import ProductList from "./RealTime/ProductList";
import CartModal from "./RealTime/CartModal";


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
     if (!cart.find((item) => item.id === product.id)) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};


const increaseQuantity = (productId) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (productId) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) // Remove if quantity becomes 0
  );
};

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} openCart={() => setIsModalOpen(true)} />
      <ProductList products={products} cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart} />
      {isModalOpen && (
        <CartModal
          cart={cart}
          closeModal={() => setIsModalOpen(false)}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}
       
    </div>
  );
};

export default App;
