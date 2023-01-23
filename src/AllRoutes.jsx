import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactUsPage from './components/ContactUs/ContactUsPage'
import Home from './components/homePage/Home';
import AboutUs from './components/pages/AboutUs';
const AllRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={< ContactUsPage />} />
            {/* <Route path="/terms" element={<TnC />} /> */}
            <Route path="/about" element={<AboutUs />} />
        </Routes >

    )
}
export default AllRoutes;