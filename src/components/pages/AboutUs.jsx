import React from 'react'
import {
    FaInstagram, FaFacebook, FaLinkedinIn, FaCertificate, FaMoneyBillAlt, FaQuestionCircle, FaHeart, FaCompass, FaGlobe, FaPuzzlePiece, FaMountain, FaExchangeAlt
} from 'react-icons/fa'
import appDesign from '../../assets/appDesign.png'
import travel from '../../assets/travelempty.jpg'
import sumukh from '../../assets/sumukh.png'
import aman from '../../assets/aman.jpg'
import avatar1 from '../../assets/avatar/myAvatar.png'
import a2 from '../../assets/avatar/a2.png'
import a3 from '../../assets/avatar/a3.png'
import a4 from '../../assets/avatar/a4.png'
import a5 from '../../assets/avatar/a5.png'
import a6 from '../../assets/avatar/a6.png'
import a7 from '../../assets/avatar/a7.png'
import a8 from '../../assets/avatar/a8.png'
import a9 from '../../assets/avatar/a9.png'
import a10 from '../../assets/avatar/a10.png'


function AboutUs() {
    return (
        <div>
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${travel})`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-80 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Your TRIP starts with us.
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        We are a team of travel enthusiasts who are passionate about exploring the world and helping others do the same. We have a wealth of experience in the travel industry and have curated a wide range of trips that cater to all types of travelers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto min-h-[300px]">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <FaCertificate />
                                        </div>
                                        <h6 className="text-xl font-semibold">Trusted Agency</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            At TripNThrill, exceptional travel experiences for many years.
                                            Our mission is to offer high-quality, immersive experiences for customers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto min-h-[300px]">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                            <FaMoneyBillAlt />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Offers
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Discover exciting destinations with us. Expert guides ensure a trip of a lifetime.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto min-h-[300px]">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <FaQuestionCircle />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Why Us ?
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Experience top-notch service with our expert travel team. From planning to returning, we're here to guide you every step of the way.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto min-h-[300px]">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <FaHeart />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Why Travelling with us is a pleasure
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Connect with destinations authentically with TripNThrill. Experience tailored trips for solo, couple or family travelers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto min-h-[300px]">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <FaCompass />
                                        </div>
                                        <h6 className="text-xl font-semibold">Expert Local Guides</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Discover destinations like a local with our passionate and knowledgeable guides.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto min-h-[300px]">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                            <FaGlobe />
                                        </div>
                                        <h6 className="text-xl font-semibold">Worldwide Destinations</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Discover a world of travel destinations with TripNThrill, from popular hotspots to off-the-grid locations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full sm:max-w-1/2 rounded-3xl shadow-lg"
                                    src={appDesign}
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl font-semibold">
                                        A growing company
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea, temporibus eaque enim obcaecati placeat alias quasi similique pariatur! Sunt.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <FaPuzzlePiece />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">
                                                        Carefully crafted
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <FaMountain />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">Amazing destinations</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <FaExchangeAlt />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">Dynamic packages</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-white container flex-col">
                    <div className=" px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Our Team</h1>

                        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
                            Our team is here to provide you with exceptional service and unforgettable memories
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={sumukh} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Sumukh YR</h1>

                            <p className="mt-2 text-gray-500 capitalize">FOUNDER AND CEO</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a6} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Sampreeth</h1>

                            <p className="mt-2 text-gray-500 capitalize">Business & Marketing</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a7} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Subhendu</h1>

                            <p className="mt-2 text-gray-500 capitalize">App Developer</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a8} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Vaibhav</h1>

                            <p className="mt-2 text-gray-500 capitalize">Frontend Developer</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={aman} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Aman Verma</h1>

                            <p className="mt-2 text-gray-500 capitalize">Frontend Developer</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={avatar1} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Suhas</h1>

                            <p className="mt-2 text-gray-500 capitalize">Business and Admin</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a2} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Ketan</h1>

                            <p className="mt-2 text-gray-500 capitalize">Web Developer</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a3} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Rahul</h1>

                            <p className="mt-2 text-gray-500 capitalize">Testing</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a4} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Tanmay</h1>

                            <p className="mt-2 text-gray-500 capitalize">UI/UX</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a5} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Vishwas</h1>

                            <p className="mt-2 text-gray-500 capitalize">Content Writing</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a6} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Neema</h1>

                            <p className="mt-2 text-gray-500 capitalize">Backend</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a9} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Mani</h1>

                            <p className="mt-2 text-gray-500 capitalize">Blogger</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl group hover:bg-gray-300 ">
                            <img className="object-cover w-32 h-32 rounded-full ring-1 ring-black" src={a10} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">Sachin</h1>

                            <p className="mt-2 text-gray-500 capitalize">CA and Legal Advisor</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="!#" className="mx-2 text-gray-800" aria-label="Instagram">
                                    <FaInstagram />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Facebook">
                                    <FaFacebook />
                                </a>

                                <a href="!#" className="mx-2 text-gray-800" aria-label="Github">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default AboutUs;
