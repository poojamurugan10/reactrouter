import React from 'react';

const CartModal = ({
  cart,
  closeModal,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
 
 

  return (
    <div className="fixed top-20 right-10 z-50 bg-white shadow-2xl rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button
          onClick={closeModal}
          className="bg-amber-300 text-white hover:text-gray-800 px-4 pz-1 text-lg font-bold"
        >
          CLOSE
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 items-center"> <img
            src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
            alt="Your Cart Is Empty"
            className="h-40 w-full object-contain mb-4"
          />
Your cart is empty.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item) => (
            <li key={item.id} className="flex flex-col border-b pb-2">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    −
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-white px-3 py-1 bg-cyan-400 text-md hover:bg-cyan-950"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      
    </div>
  );
};

export default CartModal;
