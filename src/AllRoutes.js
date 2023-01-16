import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContactUsPage, TnC, AboutUs } from './components'
import Home from './Home';
const AllRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={< ContactUsPage />} />
            <Route path="/terms" element={<TnC />} />
            <Route path="/about" element={<AboutUs />} />
        </Routes >

    )
}
export default AllRoutes;