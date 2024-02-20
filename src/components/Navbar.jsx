import React, { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  // Defining a state to control menu display.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* For devices whose width is less than 'sm' (768px) this element is going to be hidden */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((NavOpt, index) => (
          <li
            key={NavOpt.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover:text-secondary`}
          >
            <a href={`#${NavOpt.id}`}>{NavOpt.title}</a>
          </li>
        ))}
      </ul>

      {/* For narrower devices we should display the menu icon */}
      <div className={'sm:hidden flex flex-1 justify-end items-center'}>
        <img
          src={isOpen ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setIsOpen((previousState) => !previousState)}
        />

        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 mr-0">
            {navLinks.map((NavOpt, index) => (
              <li
                key={NavOpt.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                } text-white hover:text-secondary`}
              >
                <a href={`#${NavOpt.id}`}>{NavOpt.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
