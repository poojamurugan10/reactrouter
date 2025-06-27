import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { SiVirustotal } from "react-icons/si";



const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="bg-white  p-4 shadow-2xl rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-l font-bold text-gray-700  p-2 ml-2">
        {product.title}
      </h3>
      <p className="text-md font-bold text-black  p-2 ml-2 flex gap-1"><FaDollarSign />{product.price}</p>
      <h3 className="text-md font-medium text-gray-600  p-2 ml-2">{product.category}</h3>
        <span className="flex gap-35"><p className="text-md font-bold text-black  ml-3 flex gap-1"><IoStarOutline />
{product.rating.rate}</p> 
           <p className="text-md font-bold text-black  ml-3 flex gap-1"><SiVirustotal />
{product.rating.count}</p></span>
      <button onClick={() =>addToCart(product)} className="bg-cyan-600 font-bold text-white flex gap-3 p-3 ml-2 rounded hover:bg-cyan-950 ">
        <AiOutlineShoppingCart />
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;