import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/users/auth/login">ورود</Link>
    </div>
  );
};

export default Header;
