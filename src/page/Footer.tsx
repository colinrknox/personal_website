import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          © 2023 Colin Knox. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/colinrknox"
            className="text-gray-400 hover:text-gray-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/colin-r-knox"
            className="text-gray-400 hover:text-gray-600"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
