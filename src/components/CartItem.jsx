import React from 'react'
import {toast} from 'react-toastify';
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import remove from '../redux/slices/CartSlice';
const CartItem = ({item , itemIndex}) => {
    const dispatch = useDispatch();
    const removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }
  return (
    <div>
        <div>
            <div>
                <img src={item.image}/>
            </div>

            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>

                <div>
                    <p>{item.price}</p>
                    <div onClick={removeFromCart}>
                        <RiDeleteBinLine />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem