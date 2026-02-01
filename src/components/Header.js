import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center pr-32 shadow-[2px_2px_12px_rgba(0,0,0,0.1)] rounded-2xl">
      <div className="logo-container">
        <img className="h-28 ml-8 cursor-pointer" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex gap-12">
          <li>
            <NavLink to="/">
              Status:{onlineStatus ? "✅ Online" : "🔴 Offline"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="Cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
