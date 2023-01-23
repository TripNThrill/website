import React from 'react'
import { FaHeading, FaTrain, FaCrown, FaAngellist, FaStudiovinari, FaUserTie } from 'react-icons/fa';

function SiteInfo() {
    return (
        <section className="relative container">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 bottom-0 m-auto bg-gray-200 transform translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">How TripNThrill works</h2>
                        <p className="text-xl text-gray-600">At our organization, we offer custom travel planning and handle all logistics, ensuring a stress-free and memorable trip for you.</p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-4 border-[#111827]">
                            <button class="bg-white  shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaHeading className='icon' color='sky' />
                            </button>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Handling logistics</h4>
                            <p className="text-gray-600 text-center">Tailor-made itineraries to suit your preferences</p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-4 border-[#111827]">
                            <button class="bg-white  shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaTrain className='icon' color='sky' />
                            </button>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stress-free travel</h4>
                            <p className="text-gray-600 text-center">Smooth and stress-free experience</p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-4 border-[#111827]">
                            <button class="bg-white  shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaCrown className='icon' color='sky' />
                            </button>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Expert travel advisors</h4>
                            <p className="text-gray-600 text-center">Skilled and experienced in planning and organizing trips</p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-4 border-[#111827]">
                            <button class="bg-white  shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaStudiovinari className='icon' color='sky' />
                            </button>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Constant support</h4>
                            <p className="text-gray-600 text-center">Support throughout your trip</p>
                        </div>

                        {/* 5th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-4 border-[#111827]">
                            <button class="bg-white  shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaUserTie className='icon' color='sky' />
                            </button>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Personalized planning</h4>
                            <p className="text-gray-600 text-center">Tailor-made itineraries to suit your preferences</p>
                        </div>

                        {/* 6th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-4 border-[#111827]">
                            <button class="bg-white  shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaAngellist className='icon' color='sky' />
                            </button>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Customer satisfaction</h4>
                            <p className="text-gray-600 text-center">Priority to exceed your expectations</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SiteInfo
