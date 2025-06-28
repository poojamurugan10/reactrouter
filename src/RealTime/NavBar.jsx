import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-cyan-200 text-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Shopifyy!</Link>
        </h1>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:underline">
            Products
          </Link>
          <button
            onClick={openCart}
            className="bg-amber-300 px-4 py-2 flex gap-2 rounded hover:bg-amber-400"
          >
            <AiOutlineShoppingCart />
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
