import React from 'react';

const CartModal = ({cart,closeModal,removeFromCart}) => {
    
    return (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-6 rounded-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
                {cart.length===0 ? (<img src='https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg' 
                alt='Your Cart Is Empty' className='h-40 w-full object-contain mb-4'/>) 
                : (
                    <ul>
                        {cart.map((item)=>{
                            return(
                                <li key={item.id} className='mb-4 flex justify-between'>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>${item.price}</p>
                                </div>
                                <button onClick={()=>removeFromCart(item.id)} className='bg-cyan-900 text-white px-3 py-1 rounded hover:bg-cyan-500'>Remove From Cart</button>
                                </li>
                            )
                        })}
                    </ul>
                )}
                <button onClick={closeModal} className='mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-amber-500'>Close</button>
            </div>
        </div>
    );
};

export default CartModal