import React from "react";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div>
      <div className="flex items-center max-w-4xl mx-auto justify-between">
        <NavLink to="/">
          <div className="flex justify-center items-center gap-2">
            <img src='../android-chrome-192x192.png' className="h-14" />
            <span className="text-3xl text-white font-bold capitalize">Shopsy</span>
          </div>
        </NavLink>

        <div>
          <ul className="flex gap-12 text-white cursor-pointer">
            <li>Shop Now</li>
            <li>Where To buy</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              {
                cart.length>0 && 
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center rounded-full animate-bounce items-center">{cart.length}</span>
              }
              
              <IoMdCart className="text-2xl"/>
              
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
