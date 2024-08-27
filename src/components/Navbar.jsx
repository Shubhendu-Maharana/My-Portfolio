import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../components/ThemeToggler";

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-lg border-b-[1px] border-gray-600 z-20 lg:px-32 justify-between">
      <div className="justify-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-300 rounded-box mt-3 w-64 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/contact">Contact me</Link>
            </li>
          </ul>
        </div>
        <div className="avatar pl-4">
          <div className="ring-green-500 dark:ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src="/favicon.ico" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 *:mx-1 text-black dark:text-gray-300">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/contact">Contact me</Link>
            </li>
          </ul>
        </div>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Navbar;
