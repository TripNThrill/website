import React from 'react'
import { NavLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn, FaHeart } from 'react-icons/fa';

function Footer() {

    return (
        <footer className="text-center lg:text-left bg-gray-200 text-gray-600 pt-8 pb-6">
            <div className="container">
                <div className="grid grid-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full m-4 p-4">
                    <div className="col-span-2 lg:col-span-2">
                        <h2 className="uppercase font-bold my-4 flexbitems-center justify-start text-gray-600 ">
                            Let's keep in touch!
                        </h2>
                        <p className='text-lg'>
                            Find us on any of these platforms.
                        </p>
                        <div className="flex justify-evenly md:justify-start mt-6 lg:mb-0 mb-6">
                            <button className="bg-white  shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://twitter.com/trip_n_thrill?s=21&t=b7_zGpevUNe7Lgi5CyNloA" target="_blank" rel="noreferrer">
                                    <FaTwitter className='icon' color='sky' />
                                </a>
                            </button>
                            <button className="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://www.facebook.com/profile.php?id=100089621763435&mibextid=LQQJ4d" target="_blank" rel="noreferrer">
                                    <FaFacebook className='icon ' color='blue' />
                                </a>
                            </button>
                            <button className="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://instagram.com/trip_n_thrill?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                    <FaInstagram className='icon ' color='pink' />
                                </a>
                            </button>
                            <button className="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                                    <FaYoutube className='icon ' color='red' />
                                </a>
                            </button>
                            <button className="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://www.linkedin.com/company/tripnthrill/" target="_blank" rel="noreferrer">
                                    <FaLinkedinIn className='icon ' color='blue' />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-1 flex flex-col items-center justify-start">
                        <h6 className="uppercase font-bold text-gray-600 mb-4">
                            USEFUL LINKS
                        </h6>
                        <p className="mb-4">
                            <NavLink to="/" className="text-gray-700">Home</NavLink>
                        </p>
                        <p className="mb-4">
                            <NavLink to="/contact" className="text-gray-700">Contact Us</NavLink>
                        </p>
                        <p>
                            <NavLink to="/terms" className="text-gray-700">Terms</NavLink>
                        </p>
                    </div>
                    <div className="col-span-1 lg:col-span-1 flex flex-col items-center justify-center">
                        <h6 className="uppercase font-bold mb-4 text-gray-600 ">
                            Operators
                        </h6>
                        <p className="mb-4">
                            <NavLink to="/about" className="text-gray-700">About Us</NavLink>
                        </p>
                        <p className="mb-4">
                            <NavLink to="/privacy" className="text-gray-700">Privacy Policy</NavLink>
                        </p>
                        <p className="mb-4">
                            <NavLink to="/why" className="text-gray-700">Why Us ?</NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-gray-300">
                <p>Made with <FaHeart className="inline" color="red" /> in India</p>
                <span>© 2023 Copyright:</span>
                <a className="text-gray-600 font-semibold" href="https://tripnthrill.com/">TripNThrill</a>
            </div>
        </footer>
    );
};

export default Footer
