import { useContext, useState } from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const loggedInUser = () => {};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // console.log("render header");
  return (
    <nav className="flex justify-between bg-zinc-100 shadow-lg">
      {/* <div className="flex justify-between bg-zinc-100 shadow-lg"> */}
      <Link>
        <img className="h-24 w-24 m-2 rounded-md" alt="logo" src={logo} />
      </Link>
      <Link to="/">
        <p className="py-8 text-4xl font-extralight ">Food Garage</p>
      </Link>
      <div>
        <ul className="flex py-11 ">
          <li className="px-2 mr-1 font-light hover:bg-zinc-300 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 mr-1 font-light hover:bg-zinc-300 rounded-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 mr-1 font-light hover:bg-zinc-300 rounded-md">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 mr-1 font-light hover:bg-zinc-300 rounded-md">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 mr-1 font-light hover:bg-zinc-300 rounded-md">
            <Link to="/cart">Cart ({cartItems.length} Items)</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xs pt-10 font-light">{user.name}</p>
        <p className="text-xs pb-10 font-light">{user.email}</p>
      </div>
      {isLoggedIn ? (
        <Link to="/login" className="px-9 py-10">
          <button
            className="bg-zinc-300 hover:bg-zinc-400 px-2 py-1 rounded-md font-light"
            onClick={() => setIsLoggedIn(false)}
          >
            {isOnline ? "🟢" : "🔴"} Logout
          </button>
        </Link>
      ) : (
        <Link to="/" className="px-9 py-10">
          <button
            className="bg-zinc-300 hover:bg-zinc-400 px-2 rounded-md py-1 font-light"
            onClick={() => setIsLoggedIn(true)}
          >
            {isOnline ? "🟢" : "🔴"} Login
          </button>
        </Link>
      )}
      {/* </div> */}
    </nav>
  );
};

export default Header;
