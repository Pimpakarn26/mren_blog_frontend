import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-blue-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          SE NPRU BLOG
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Register">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
