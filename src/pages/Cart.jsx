import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="w-full h-full">
      {cart.length > 0 ? (
        <div className="flex max-w-4xl mx-auto justify-center items-center">
          <div className="flex flex-col gap-8">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div> Your Cart </div>
              <div>Summary</div>
              <div>Total Items {cart.length}</div>
            </div>
            <div>
              <p>Total Amount{amount}</p>
              <button>Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-2 h-full items-center">
          <h2>Cart is Empty</h2>
          <Link to="/">
            <button className="bg-green-500 px-4 py-2 rounded-md font-semibold text-lg uppercase">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
