import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
        <FaBookOpen className="text-2xl" />
        <span>Lesson Plan AI</span>
      </Link>
      <div className="space-x-6 text-text-main font-medium">
        <Link to="/" className="hover:text-primary transition">Home</Link>
        <Link to="/#features" className="hover:text-primary transition">Features</Link>
        <Link to="/generate" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition shadow-md">
          Generate
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
