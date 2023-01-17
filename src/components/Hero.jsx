import React from 'react';
import travel from '../assets/travel.png';

const Hero = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-evenly w-full sm:h-screen md:flex-row'>
      <div className='justify-center text-center mx-4 p-4 lg:max-w-1/2 sm:lg:max-w-full'>
        <div className='flex flex-col md:p-8 md:m-8'>
          <h1 className='font-sans py-4 text-lg sm:text-4xl  text-indigo-900'>Create Your Own Adventure with Our Custom Tour Packages</h1>
          <p className='font-sans py-4 text-sm sm:text-xl text-indigo-600'>Our tours are carefully crafted to provide the perfect balance of relaxation and excitement. We offer luxurious accommodations, unparalleled sightseeing opportunities, and authentic local experiences that will stay with you long after your trip is over</p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class=" inline-flex rounded-md shadow">
              <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Explore
              </button>
            </div>
            <div class="inline-flex ml-3 rounded-md shadow">
              <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Get our app
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-1/2 lg:max-w-full sm:max-w-full">
        <img className='' src={travel} alt="/" />
      </div>
    </div>
  );
};

export default Hero;
