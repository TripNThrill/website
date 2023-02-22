import React from 'react'
import phone1 from '../../assets/phone1.png'

const WhatWeDo = () => {

    return (

        <div>
            <div className="relative py-20 bg-white" id="services">
                <div className="container mx-auto px-4 bg-white">
                    <div className="items-center flex flex-col md:flex-row">
                        <div className="w-full md:w-4/12 ml-auto mr-auto px-4 md:block">
                            <img src={phone1} alt='...' className='max-w-full rounded-lg' />
                        </div>
                        <div className="w-full md:5/12  px-4 text-white">
                            <div className="md:pr-12 md:pl-24">
                                <h1 className='text-3xl md:text-5xl font-semibold text-black'>Where is your next trip?</h1>
                                <p className='mt-4 text-lg leading-relaxed text-gray-500'>
                                    Tell us what you enjoy the most. Our Artificial Intelligence will curate an itinerary matching all your needs.
                                </p>
                                <div className='mt-2'>
                                    <li className='mb-2 text-lg leading-relaxed text-gray-500 p-0'>What is the purpose of your trip?</li>
                                    <li className='mb-2 text-lg leading-relaxed text-gray-500 p-0'>What are your interests?</li>
                                    <li className='mb-2 text-lg leading-relaxed text-gray-500 p-0'>With who do you go with?</li>
                                    <li className='mb-2 text-lg leading-relaxed text-gray-500 p-0'>How long do you stay?</li>
                                    <li className='text-lg leading-relaxed text-gray-500 p-0'>What is your budget?</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhatWeDo