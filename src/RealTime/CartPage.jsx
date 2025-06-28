import React from "react";

const CartPage = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discounted = (total * 0.9).toFixed(2); // 10% discount

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
            alt="Your Cart Is Empty"
            className="h-48 mx-auto mb-4"
          />
          <p className="text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col border-b pb-4">
              <div className="flex justify-between items-center">
                <div className="w-3/4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">
                    Price: ${item.price.toFixed(2)} × {item.quantity} ={" "}
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                  >
                    −
                  </button>
                  <span className="px-2 font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 border-t pt-4">
            <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
            <p className="text-lg text-green-700 bg-green-100 px-4 py-2 inline-block mt-2 rounded">
              After 10% Discount: ${discounted}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
