import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className='bg-cyan-200 text-gray-550 p-4'>
      <div className='container mx-auto flex justify-between'>
        <h1 className='text-3xl font-bold'>
          <Link to="/" className="hover:text-blue-800">Shopifyy!</Link>
        </h1>

        <Link
          to="/cart"
          className='bg-amber-300 px-4 py-2 flex justify-between gap-2 rounded focus:outline-none hover:bg-amber-400'
        >
          <AiOutlineShoppingCart /> Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
