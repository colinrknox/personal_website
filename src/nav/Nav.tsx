import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <span className="font-bold text-xl">Your Name</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Home
                </a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Blog
                </a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
