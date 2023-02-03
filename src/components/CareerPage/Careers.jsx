import React from 'react'
import { motion } from "framer-motion";
import './careers.css'

function Careers() {

    return (
        <div className="mx-auto mt-20 mb-[7rem] justify-center space-y-3 lg:space-y-6 pt-4 text-center md:px-6 lg:mt-[0] lg:pt-[11rem] lg:mb-[0] lg:pb-[14.5rem] bg-[#9083ff]">
            <motion.h1
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-4xl lg:text-7xl text-[#13005A]"
            >
                Join Our Team and
                <br className="hidden lg:flex" /> Travel World
            </motion.h1>
            <motion.p
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="text-md basiersquare-medium lg:text-xl"
            >
                Explore Exciting Career Opportunities in the World of Travel and Tourism
            </motion.p>
            <motion.a
                href="#joblist"
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="inline-flex items-center rounded-lg bg-[#f3b800] py-3 px-4 text-[#220a00]"
            >
                See open positions{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </motion.a>
        </div>
    )
}

export default Careers;
