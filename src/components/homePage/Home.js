import React from 'react'
import Hero from './Hero'
import HeroHome from './HeroHome';
import Destination from './Destination';
import SiteInfo from './SiteInfo';
// import Reviews from './Reviews';
import './home.css'

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Hero />
            <main className="flex-grow">
                <HeroHome />
                <Destination />
                <SiteInfo />
                {/* <Reviews /> */}
            </main>
        </div>
    )
}

export default Home;
