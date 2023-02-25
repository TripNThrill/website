import React from 'react'
import Error from '../../assets/Error.png'
import { Link } from "react-router-dom";

function NotFoundRoute() {
    return (
        <section className="flex items-center h-full p-16 bg-white text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="flex items-center flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img src={Error} alt='404-page' />
                    </div>
                    <div className="text-center">
                        <p className="mt-4 mb-4 md:mb-8 text-gray-800">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/" className="px-8 py-3 md:font-semibold rounded bg-[#ffc100] text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundRoute;
