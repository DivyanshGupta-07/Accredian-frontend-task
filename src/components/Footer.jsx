// src/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 mt-10">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Accredian</h2>
        <div className="flex justify-center space-x-6 mb-4">
          <button className="hover:underline">Programs</button>
          <button className="hover:underline">Contact Us</button>
          <button className="hover:underline">About Us</button>
        </div>
        <div className="mt-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <p className="mt-2">Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="" className="hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
