import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Added to Card");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Remove from Card");
  };
  return (
    <div
      className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 
    ease-in shadow-2xl gap-3 py-4 px-1 mt-10 ml-5 rounded-xl"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
          {post.title}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-400 text-[10px] font-normal text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[150px]">
        <img src={post.image} className="h-full w-full" />
      </div>
      <div className="flex justify-between  gap-[25px] items-center w-full mt-2">
        <div>
          <p className="text-green-600 text-sm font-semibold">${post.price}</p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button onClick={removeFromCart} className="text-gray-700 border-2 uppercase border-gray-700 p-1 px-3 
           text-[12px] rounded-full font-semibold
           hover:text-white hover:bg-gray-700 transition duration-300 ease-in">Remove Item</button>
        ) : (
          <button onClick={addToCart} className="text-gray-700 border-2 uppercase border-gray-700 p-1 px-3
            text-[12px] rounded-full font-semibold
            hover:text-white hover:bg-gray-700 transition duration-300 ease-in">Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
