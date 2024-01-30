import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/memo">Memo</Link>
          </li>
          <li>
            <Link to="/todo">ToDo</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
