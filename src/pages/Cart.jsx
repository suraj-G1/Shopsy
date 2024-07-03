import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {cart} = useSelector((state)=>state);
    const [amount,setAmount] = useState(0);

    useEffect(()=>{
        setAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart]);
  return (
    <div>
        {
            cart.length>0?
            (
                <div>
                    <div>
                        {
                            cart.map((item,index)=>{
                                return <CartItem key={item.id} item={item} itemIndex={index}/>
                            })
                        }
                    </div>

                    <div>
                        <div> Your Cart </div>
                        <div>Summary</div>
                        <div>Total Items {cart.length}</div>
                    </div>
                    <div>

                        <p>Total Amount{amount}</p>
                        <button>
                            Checkout Now
                        </button>
                    </div>
                </div>
            ):
            (
                <div>
                    <h2>Cart is Empty</h2>
                    <Link to="/">
                        <button>Show Now</button>
                    </Link>
                </div>
            )
        }
    </div>
  )
}

export default Cart