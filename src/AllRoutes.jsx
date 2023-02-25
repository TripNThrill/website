import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CareerPage from './components/CareerPage/CareerPage';
import Chatbot from './components/ChatBot/Chatbot';
import ContactUsPage from './components/ContactUs/ContactUsPage'
// import Blogs from './components/homePage/Blogs';
import Home from './components/homePage/Home';
import AboutUs from './components/pages/AboutUs';
import OperatorsPage from './components/pages/OperatorsPage';
import TnC from './components/pages/TnC';
import WhyUs from './components/pages/WhyUs';
import Policy from './components/pages/privacy policy/Policy';
import NotFoundRoute from './components/pages/NotFoundRoute';


const AllRoutes = () => {

    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <Routes >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/contact" element={< ContactUsPage />} />
            <Route path="/terms" element={<TnC />} />
            <Route exact path="/chat" element={<Chatbot />} />
            <Route exact path="/why" element={<WhyUs />} />
            <Route exact path="/careers" element={<CareerPage />} />
            <Route exact path="/privacy" element={<Policy />} />
            <Route exact path="/oprators" element={<OperatorsPage />} />
            {/* <Route exact path="/blog" element={<Blogs />} /> */}
            <Route path="*" element={<NotFoundRoute />} />

        </Routes >

    )
}
export default AllRoutes;