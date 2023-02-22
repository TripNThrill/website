import React from 'react'
import Custom from '../../assets/siteinfo/custom.png'
import Stressfree from '../../assets/siteinfo/Stressfree.png'
import Experts from '../../assets/siteinfo/Experts.png'
import Support from '../../assets/siteinfo/Support.png'
import Planning from '../../assets/siteinfo/Planning.png'
import Customer from '../../assets/siteinfo/Customer.png'

function SiteInfo() {
    return (
        <section className="relative container">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
            <div className="absolute left-0 right-0 bottom-0 m-auto bg-gray-200 transform translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="text-3xl md:text-5xl mb-4">How TripNThrill works</h2>
                        <p className="text-base md:text-xl text-gray-600">At our organization, we offer custom travel planning and handle all logistics, ensuring a stress-free and memorable trip for you.</p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-[#111827]">
                            <div className="bg-white  shadow-lg font-normal h-30 w-30 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                <img className='' src={Custom} alt="/" />
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mt-8">Customizable packages</h4>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-[#111827]">
                            <div className="bg-white  shadow-lg font-normal h-30 w-30 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                <img className='' src={Stressfree} alt="/" />
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mt-8">Stress-free travel</h4>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-[#111827]">
                            <div className="bg-white  shadow-lg font-normal h-30 w-30 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                <img className='' src={Experts} alt="/" />
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mt-8">Expert travel advisors</h4>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-[#111827]">
                            <div className="bg-white  shadow-lg font-normal h-30 w-30 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                <img className='' src={Support} alt="/" />
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mt-8">Constant support</h4>
                        </div>

                        {/* 5th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-[#111827]">
                            <div className="bg-white  shadow-lg font-normal h-30 w-30 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                <img className='' src={Planning} alt="/" />
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mt-8">Personalized planning</h4>
                        </div>

                        {/* 6th item */}
                        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-[#111827]">
                            <div className="bg-white  shadow-lg font-normal h-30 w-30 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                                <img className='' src={Customer} alt="/" />
                            </div>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mt-8">Customer satisfaction</h4>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SiteInfo
