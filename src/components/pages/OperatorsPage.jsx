import React from 'react'
import CountUp from "react-countup";
import opimg from '../../assets/Operators.jpg'
import hand from '../../assets/handshake.jpg'
import { FaLocationArrow, FaPhoneSquareAlt, FaRandom, FaHandPeace, FaBimobject } from 'react-icons/fa'
import OpreatorContact from './OpreatorContact';

function OperatorsPage() {
    return (
        <div className="">

            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                style={{
                    minHeight: "70vh"
                }}>


                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${opimg})`
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-80 bg-black"></span>
                </div>
                <div className="container relative px-5 pt-32 mx-auto lg:px-4 lg:py-4">
                    <div className="flex flex-col w-full mb-2 text-center ">
                        <h1 className="mb-2 text-5xl font-bold tracking-tighter text-white lg:text-7xl md:text-5xl">
                            <span>Are You a OPERATOR ?</span>
                        </h1>
                        <br></br>
                        <p className="mx-auto  md:text-xl font-normal leading-relaxed text-gray-700 dark:text-gray-300 lg:w-2/3">
                            Grow your travel business with 100% phone & email verified leads.{" "}
                            <br></br>
                            Call Us at <a href="tel:+919148939841">+91 9148939841</a> and learn about how we can help you
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-gray-600 body-font">

                <div className="px-5 py-5 md:py-10">
                    <div className="flex -m-4 text-center border-8 border-black rounded">
                        <div className="p-4 sm:w-1/3 w-full">
                            <h2 className="title-font font-medium sm:text-5xl text-3xl text-black">
                                <CountUp end={100} redraw={true}>
                                </CountUp>
                            </h2>
                            <p className="leading-relaxed">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/3 w-full">
                            <h2 className="title-font font-medium sm:text-5xl text-3xl text-black">
                                <CountUp end={100} redraw={true}>
                                </CountUp>
                            </h2>
                            <p className="leading-relaxed">ACTIVE AGENTS</p>
                        </div>
                        <div className="p-4 sm:w-1/3 w-full">
                            <h2 className="title-font font-medium sm:text-5xl text-3xl text-black">
                                <CountUp end={100} redraw={true}>
                                </CountUp>
                            </h2>
                            <p className="leading-relaxed">% VERIFIED LEADS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap my-20 pb-20">
                    <div className="w-full px-4 ml-auto mr-auto text-center">
                        <div className="md:pr-12">
                            <h1 className="text-black font-semibold text-4xl md:text-7xl">
                                Designed to help you grow your travel business
                            </h1>
                            <p className="mt-4 taxt-base md:text-lg text-gray-900">
                                We are a team of travel enthusiasts who are passionate about exploring the world and helping others do the same.
                            </p>
                        </div>
                    </div>

                    <section className="bg-gray-300">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="pt-6 w-full px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg md:rounded-full">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                                <FaPhoneSquareAlt />
                                            </div>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                <h6 className="text-xl font-semibold text-black">100% Phone Verified</h6>
                                                We talk to each lead and verify travel intent for each traveller that we connect with you.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full pt-6 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg md:rounded-full">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                                <FaRandom />
                                            </div>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                <h6 className="text-xl font-semibold text-black">Highest Conversion Rates</h6>
                                                Most of the agents who work with us see a conversion rate of above 8%
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 w-full px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg md:rounded-full">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                                <FaHandPeace />
                                            </div>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                <h6 className="text-xl font-semibold text-black">
                                                    0% Commission On Sales
                                                </h6>
                                                Sell directly to your customers with your own pricing & branding and maximise your returns.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 w-full px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg md:rounded-full">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                                                <FaBimobject />
                                            </div>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                <h6 className="text-xl font-semibold text-black">
                                                    Grow Your Brand
                                                </h6>
                                                Get free profile & listing on the website and use review manager to collect reviews and grow your brand.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>




            <div className="container flex-col">
                <div className=" p-4 flex items-center justify-center w-full ">
                    <h1 className='text-4xl md:text-6xl bold'>Join Our Travel Marketplace</h1>
                </div>
                <div className="pt-4 pb-28 grid md:grid-cols-2">
                    <div className="md:w-3/4 mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img
                            alt="feature"
                            className="object-cover object-center"
                            src={hand}
                        />
                    </div>


                    <div className="flex flex-col lg:pl-12 lg:text-left text-center">
                        <p className="text-black text-3xl md:text-5xl">
                            Follow These Steps
                        </p>
                        <div className="mt-10 p-6 m-w-[350px] w-full border-2 border-[#e5e5e5] rounded-lg">
                            <div className="flex">
                                <div className='flex justify-center items-center p-4'><FaLocationArrow /></div>
                                <p className="text-lg flex justify-center items-center">
                                    Create your profile
                                </p>
                            </div>
                            <div className='h-px mx-4 mt-6 mb-4 bg-[#e5e5e5]'></div>
                            <div className="flex">
                                <div className='flex justify-center items-center p-4'><FaLocationArrow /></div>
                                <p className="text-lg flex justify-center items-center">
                                    Download our app
                                </p>
                            </div>
                            <div className='h-px mx-4 mt-6 mb-4 bg-[#e5e5e5]'></div>
                            <div className="flex">
                                <div className='flex justify-center items-center p-4'><FaLocationArrow /></div>
                                <p className="text-lg flex justify-center items-center">
                                    Fill the onboarding form
                                </p>
                            </div>
                            <div className='h-px mx-4 mt-6 mb-4 bg-[#e5e5e5]'></div>
                            <div className="flex">
                                <div className='flex justify-center items-center p-4'><FaLocationArrow /></div>
                                <p className="text-lg flex justify-center items-center">
                                    Wait untill we verify
                                </p>
                            </div>
                            <div className='h-px mx-4 mt-6 mb-4 bg-[#e5e5e5]'></div>
                            <div className="flex">
                                <div className='flex justify-center items-center p-4'><FaLocationArrow /></div>
                                <p className="text-lg flex justify-center items-center">
                                    Ready for business
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OpreatorContact />
        </div>
    )
}

export default OperatorsPage
