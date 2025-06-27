import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({cartCount, openCart}) => {
    
    
    return (
        <nav className='bg-cyan-200 text-gray-550 p-4'>
            <div className='container mx-auto flex justify-between'>
                <h1 className='text-3xl font-bold'>Shopifyy!</h1>
                <button onClick={openCart} className='bg-amber-300 px-4 py-2 flex justify-between gap-2 rounded focus:outline-none '><AiOutlineShoppingCart />Cart({cartCount})</button>
            </div> 
            
        </nav>
    );
};

export default Navbar;