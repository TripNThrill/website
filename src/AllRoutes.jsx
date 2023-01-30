import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CareerPage from './components/CareerPage/CareerPage';
import Chatbot from './components/ChatBot/Chatbot';
import ContactUsPage from './components/ContactUs/ContactUsPage'
import Home from './components/homePage/Home';
import AboutUs from './components/pages/AboutUs';
const AllRoutes = () => {

    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <Routes >
            <Route exact path="/chat" element={<Chatbot />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={< ContactUsPage />} />
            {/* <Route path="/terms" element={<TnC />} /> */}
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/careers" element={<CareerPage />} />
        </Routes >

    )
}
export default AllRoutes;