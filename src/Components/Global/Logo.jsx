import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo.png" width={100} className="h-full object-cover"></img>
    </Link>
  );
};

export default Logo;
