import React from "react";
import Hero from "./Hero";
import HeroHome from "./HeroHome";
import Destination from "./Destination";
import SiteInfo from "./SiteInfo";
// import Reviews from './Reviews';
import "./home.css";
import WhatWeDo from "./WhatWeDo";
import Bottom from "./Bottom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Hero />
      <main className="flex-grow">
        <WhatWeDo />
        <Bottom />
        <HeroHome />
        <Destination />
        <SiteInfo />

        {/* <Reviews /> */}
      </main>
    </div>
  );
}

export default Home;
