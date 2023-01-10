import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 text-#6644fa'>
      <div >
        <h1><span style={{ color: '#03008d' }}><Link to="/">TripNThrill</Link></span></h1>
      </div>
      <div className='hidden md:flex justify-evenly w-3/4 font-bold text-indigo-800'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/terms">Terms and Conditions</Link>
      </div>
      {/* <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div> */}

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'z-10 absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <li className='border-b'><Link to="/">Home</Link></li>
          <li className='border-b'><Link to="/contact">Contact Us</Link></li>
          <li className='border-b'><Link to="/terms">Terms and Conditions</Link></li>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
