import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer className="font-light bg-zinc-100 rounded-md py-1 text-center mb-0">
      <Link
        target="_blank"
        to="https://mail.google.com/mail/?view=cm&fs=1&to=suwalkadivyansh63@gmail.com"
      >
        <p className="text-xs">Developed by {user.name} </p>
      </Link>
      <p>© {new Date().getFullYear()} Food Garage. All rights reserved.</p>
      <div className="mb-[2px]">
        <Link className="mx-4">Privacy Policy</Link> |
        <Link className="mx-4">Terms of Service</Link> |
        <Link to="/contact" className="mx-4">
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
