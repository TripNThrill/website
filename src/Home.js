import React from 'react';
import { Hero, Carousel, Destinations, Search, Selects } from './components'
// import './App.css';

function Home() {
    return (
        <div className="Home">
            <Hero />
            <Destinations />
            <Search />
            <Selects />
            <Carousel />
        </div>
    );
}

export default Home;