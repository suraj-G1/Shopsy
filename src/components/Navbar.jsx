import React from "react";
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <img src="" />
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
                <IoMdCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
