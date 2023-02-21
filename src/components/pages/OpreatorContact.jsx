import React from 'react'
import {
    FaMobileAlt,
    FaRegEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

function OpreatorContact() {
    return (
        <div className="bg-gray-300 text-gray-100 px-8 py-12">
            <div
                className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                    </div>
                    <div className="text-center">
                        <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                            <div className="flex flex-col">
                                <div className="flex relative py-5">
                                    <div className="min-w-[60px] bg-white flex justify-center items-center rounded-full text-2xl"><FaMapMarkerAlt className='icon' /></div>
                                    <div className="flex flex-col items-start font-light ml-5 text-base text-black">
                                        <h3 className='font-medium'>Address</h3>
                                        <p>501 street india</p>
                                    </div>
                                </div>
                                <div className="flex relative py-5">
                                    <div className="min-w-[60px] bg-white flex justify-center items-center rounded-full text-2xl"><FaMobileAlt className='icon' /></div>
                                    <div className="flex flex-col items-start font-light ml-5 text-base text-black">
                                        <h3 className='font-medium'>Phone</h3>
                                        <p><a href="tel:+919148939841">+91 9148939841</a></p>
                                    </div>
                                </div>
                                <div className="flex relative py-5">
                                    <div className="min-w-[60px] bg-white flex justify-center items-center rounded-full text-2xl"><FaRegEnvelope className='icon' /></div>
                                    <div className="flex flex-col items-start font-light ml-5 text-base text-black">
                                        <h3 className='font-medium'>Email</h3>
                                        <p className='cursor-pointer' onClick={() => window.location = 'mailto:support@tripnthrill.com'}>support@tripnthrill.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline resize-none"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpreatorContact
