import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white p-4">
      <div className="container mx-auto flex justify-center md:justify-between items-center py-4 px-6 ">
        <ul className="flex text-lg font-semibold space-x-10">
          <li>
            <Link href="/" className="text-white hover:text-blue-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-blue-500 transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/product/1" className="text-white hover:text-blue-500 transition duration-300">
              Product
            </Link>
          </li>
          <li>
            <Link href="/users" className="text-white hover:text-blue-500 transition duration-300">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
