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
        <div className='flex justify-between gap-12 max-w-[480px]'>
            <div className='w-full h-[200px]'>
                <img src={item.image} className='w-[180px] h-full'/>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">{item.title}</h1>
                <p className='text-gray-500 text-[12px] font-semibold'>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>

                <div className='flex w-full justify-between'>
                    <p className="text-green-600 text-sm font-semibold">${item.price}</p>
                    <div onClick={removeFromCart}>
                        <div className='w-6 h-6 cursor-pointer flex justify-center items-center bg-red-400 rounded-full p-1'>
                            <RiDeleteBinLine className='h-3 w-3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem