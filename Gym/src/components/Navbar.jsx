import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Logo from '../Images/logo.webp'

export default function Navbar() {

  const navbar = [
    { href: "/", name: "Gym Benefits" },
    { href: "/", name: "Gallery" },
    { href: "/", name: "About" },
    { href: "/", name: "Contact" }
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-black mb-20 relative text-white">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-5 sm:px-8 lg:px-16">


        <a href="#" className="text-2xl font-bold">
          <img src={Logo} className="w-25 h-25 absolute z-1 top-7 shadow-md shadow-blue-600 ring-2 ring-blue-600 rounded-full " />
        </a>


        <ul className="hidden md:flex gap-8 lg:gap-12 text-lg font-medium">
          {navbar.map((v, i) => (
            <li key={i}>
              <a
                href={v.href}
                className="hover:text-red-500 transition duration-300"
              >
                {v.name}
              </a>
            </li>
          ))}
        </ul>

    
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <CiMenuBurger />}
        </div>
      </div>

  
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          open ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-lg">
          {navbar.map((v, i) => (
            <li key={i}>
              <a
                href={v.href}
                className="block hover:text-red-500 transition"
                onClick={() => setOpen(false)}
              >
                {v.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}