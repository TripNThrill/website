import React from 'react';
// import FeaturesBg from '../../assets/adventure.png';
import BoraBora from '../../assets/destinations/borabora.jpg';
import BoraBora2 from '../../assets/destinations/borabora2.jpg';
import Maldives from '../../assets/destinations/maldives.jpg';
import Maldives2 from '../../assets/destinations/maldives2.jpg';
import Maldives3 from '../../assets/destinations/maldives3.jpg';
import KeyWest from '../../assets/destinations/keywest.jpg';
import SelectsCard from './SelectCard';

function Destination() {

    return (
        <section className="relative my-10 md:my-40">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="text-4xl md:text-5xl mb-4">Explore the destinations</h1>
                        <p className="text-base text-gray-600">Explore the world with our curated selection of destinations.</p>
                    </div>

                    <div className='px-4 text-center' >
                        <div className='max-w-[1240px] mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                            <SelectsCard bg={BoraBora} text='Hampi' />
                            <SelectsCard bg={BoraBora2} text='Coorg' />
                            <SelectsCard bg={Maldives} text='Chikmagalur' />
                            <SelectsCard bg={Maldives2} text='Jog Falls' />
                            <SelectsCard bg={Maldives3} text='Mysore Palace' />
                            <SelectsCard bg={KeyWest} text='Gokarna' />
                            <SelectsCard bg={BoraBora} text='Bandipur ' />
                            <SelectsCard bg={BoraBora2} text='Kabini River' />
                            <SelectsCard bg={Maldives} text='Bangalore' />


                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
}

export default Destination;
