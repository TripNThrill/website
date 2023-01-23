import React from 'react';
import FeaturesBg from '../../assets/adventure.png';

function Destination() {

    return (
        <section className="relative">
            <div className="absolute inset-0 bg-[#A6BB8D] pointer-events-none" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Explore the destinations</h1>
                        <p className="text-xl text-gray-600">Explore the world with our curated selection of destinations.Whether you're looking for an adventure-filled trip or a relaxing getaway, our expert travel advisors will help you plan the perfect vacation. Let us take you on a journey to discover new cultures, taste delicious food, and create memories that will last a lifetime.</p>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h2 className="h3 mb-3">Glorious destinations to travel</h2>
                            </div>
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <div className="flex flex-col md:flex-row items-center text-lg p-5 rounded border-4 mb-2">
                                    <div className="font-bold leading-snug tracking-tight mx-2">Agra</div>
                                    <div className="text-gray-600">Home of the iconic Taj Mahal, a symbol of love and one of the Seven Wonders of the World.</div>
                                </div>
                                <div className='flex flex-col md:flex-row items-center text-lg p-5 rounded border-4 mb-2'>
                                    <div className="font-bold leading-snug tracking-tight mx-2">Ladakh</div>
                                    <div className="text-gray-600">A high-altitude desert area known for its rugged natural beauty and ancient Buddhist monasteries.</div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center text-lg p-5 rounded border-4 mb-2">
                                    <div className="font-bold leading-snug tracking-tight mx-2">Goa</div>
                                    <div className="text-gray-600">A popular beach destination known for its golden sandy beaches, delicious seafood, and vibrant nightlife.</div>
                                </div>
                                <div className='flex flex-col md:flex-row items-center text-lg p-5 rounded border-4 mb-2'>
                                    <div className="font-bold leading-snug tracking-tight mx-2">Kerala</div>
                                    <div className="text-gray-600">Nicknamed "God's Own Country" for its stunning natural beauty, including lush green hills, tranquil backwaters, and pristine beaches.</div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out">
                            <div className="relative flex flex-col text-center lg:text-right">
                                <div className="relative inline-flex flex-col">
                                    <img className="md:max-w-none mx-auto rounded" src={FeaturesBg} width="500" height="462" alt="Features bg" />
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </section >
    );
}

export default Destination;
