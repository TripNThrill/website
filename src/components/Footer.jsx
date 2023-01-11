import React from 'react';
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-400 p-4 sm:p-16'>
      <div className='grid grid-cols-2 gap-10 place-content-center md:grid-cols-3'>
        <div className='my-4 sm:border-r-2 border-gray-900'>
          <p className='font-bold'>About TripNThrill</p>
          <ul className=''>
            <li><Link to="/about">About Us</Link></li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
        </div>
        <div className='my-4 sm:border-r-2 border-gray-900'>
          <p className='font-bold'>For Travellers</p>
          <ul className=''>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Destinations</Link></li>
            <li><Link to="/">Travel</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div className='col-span-2 flex md:flex-col md:col-span-1 justify-between my-4 '>
          <FaFacebook className='icon' />
          <FaTwitter className='icon' />
          <FaYoutube className='icon' />
          <FaPinterest className='icon' />
          <FaInstagram className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
