import React from 'react'
import homepage from '../../assets/homepage.png'

function Hero() {
    return (
        // <section className="relative">
        <div className='flex flex-col items-center w-full sm:h-screen md:flex-row bg-[#FBF1D3]'>
            <div className="lg:w-4/12 sm:w-full">
                <img className='' src={homepage} alt="/" />
            </div>
            <div className='justify-center text-center mx-4 py-4 lg:w-1/2 sm:lg:w-full'>
                <div className='flex flex-col md:p-8 md:m-8'>
                    <h1 className='font-sans intro-title'>Explore the World with Us</h1>
                    {/* <p className='font-sans p-4 text-sm sm:text-xl text-Amber-600'>Tour and Travel Packages for Every Adventure Seeker</p> */}
                    <p className='font-sans p-4 text-sm sm:text-xl text-Amber-600'>Discover new places and create unforgettable memories</p>
                    <div class="flex justify-evenly m-1">
                        <div class="download android">
                            <i class="fa fa-android fa-2x"></i>
                            <span class="p1">Download from</span>
                            <span class="p2">Google Play</span>
                        </div>
                        <div class="download apple">
                            <i class="fa fa-apple fa-2x"></i>
                            <span class="p1">Download from</span>
                            <span class="p2">App Store</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </section>
    )
}

export default Hero
