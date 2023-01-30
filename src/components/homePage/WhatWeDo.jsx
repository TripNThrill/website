import React from 'react'
import { MdTravelExplore } from 'react-icons/md'
import phone1 from '../../assets/phone1.png'

const WhatWeDo = () => {
    const kpiData = [
          {  heading: 'What is the purpose of your trip?' },
          {  heading: 'What are your interests?' },
          {  heading: 'With who do you go with?' },
          {  heading: 'How long do you stay?' },
          {  heading: 'What is your budget?' },
        ];
  return (
    
    <div>
        


        <div className="relative py-20 bg-white" id="services">
            <div className="container mx-auto px-4 bg-white">
                <div className="items-center flex ">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4 hidden md:block">
                        <img src={phone1} alt='...' className='max-w-full rounded-lg' />
                    </div>
                    <div className="w-full md:5/12  px-4 text-white">
                        <div className="md:pr-12 md:pl-24">
                            <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <MdTravelExplore size={36} />
                            </div>
                            <h3 className='text-3xl font-semibold text-white'>Where is your next trip?</h3>
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