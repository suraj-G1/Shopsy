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
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={post.image} />
      </div>

      <div>
        <p>{post.price}</p>
      </div>
      <div>
        {cart.some((p) => p.id == post.id) ? (
          <button onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
