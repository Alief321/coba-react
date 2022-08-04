import React, { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 overflow-hidden w-full bg-black/50 rounded-b-xl">
      <div className="flex items-center h-24 max-w-[1240px] mx-auto justify-between px-4 text-white ">
        <h1 className="w-full text-3xl font-bold text-green-400">Coba React</h1>
        <ul className="hidden md:flex font-semibold">
          <li className="p-4">
            <a href="#home">Home</a>
          </li>
          <li className="p-4">
            <a href="#about">About</a>
          </li>
          <li className="p-4">
            <a href="#newsletter">Newsletter</a>
          </li>
          <li className="p-4">
            <a href="#resource">Resource</a>
          </li>
          <li className="p-4 h-full w-full bg-white text-slate-600 rounded-xl hover:text-white hover:bg-green-500">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <CgMenuGridR size={30} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className="w-full text-3xl font-bold text-green-400 m-4">Coba React</h1>
          <ul className="p-4 uppercase">
            <li className="p-4 border-b border-gray-600">
              <a href="#home">Home</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#about">About</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#newsletter">Newsletter</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="#resource">Resource</a>
            </li>
            <li className="p-4 border-b border-gray-600 ">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
