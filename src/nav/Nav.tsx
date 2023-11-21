import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 border-gray-200 px-2 sm:px-4 py-2.5 rounded-full shadow-lg z-50 mt-2">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <button
            className="text-gray-900 text-lg font-semibold"
            aria-current="page"
          >
            Colin Knox
          </button>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <button
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                >
                  Posts
                </button>
              </li>
              <li>
                <button
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Nav;
