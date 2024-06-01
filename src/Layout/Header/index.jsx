import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Logo from "../../assets/icons/logo";

const Header = () => {
  return (
    // <div className="flex justify-between  py-4 px-16">
    <div className="flex justify-between items-center   py-12 px-8 sn:py-8 sn:px-16 ">
      <div className="flex items-center gap-8">
        <Link to="/">
          <Logo className=" bg-green-700 " width={"85"} height={"74"} />
        </Link>
        <NavBar />
      </div>
      <div className="flex items-center gap-4 w-[98px] ">
        <Login />
      </div>
    </div>
  );
};

export default Header;
