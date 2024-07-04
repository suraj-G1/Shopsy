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
    <div className="max-w-4xl mx-auto max-h-full mt-4">
      {cart.length > 0 ? (
        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center gap-12 ">
          <div className="flex flex-col  gap-4 border-2 border-r-2 p-6">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col items-center gap-[300px] p-4">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-lg"> Your Cart </div>
              <div className="font-semibold">Summary</div>
              <div className="text-lg font-semibold">Total Items:
              <span className="font-bold">{cart.length}</span> </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-md">Total Amount: $
                <span className="text-green-700 font-bold"> {amount}</span>
              </p>
              <button className="px-6 py-2 border-2 rounded-md bg-green-400 text-white font-bold uppercase  border-green-600">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col my-auto justify-center items-center">
          <h2>Cart is Empty</h2>
          <Link to="/">
            <button className="border-2 border-gray-600 bg-green-600 text-white uppercase font-semibold px-8 py-1 rounded-md">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
