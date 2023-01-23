import React from 'react'
import review1 from '../../assets/review1.png'

function Reviews() {
    return (
        <section className="relative container">
            <div className="mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2 mb-4">Trusted by over thousands of customers all over the country</h2>
                    </div>

                    {/* Testimonials */}
                    <div className="flex justify-center items-center flex-col md:flex-row mx-auto mt-20">
                        <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                            {/* Testimonial */}
                            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                    <img className="relative rounded-full" src={review1} width="96" height="96" alt="Testimonial 01" />
                                </div>
                                <blockquote className="text-xl font-medium mb-4">
                                    “ I love this product and would recommend it to anyone. “
                                </blockquote>
                                <cite className="block font-bold text-lg not-italic mb-1">Ram</cite>
                            </div>
                        </div>
                        <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                            {/* Testimonial */}
                            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                    <img className="relative rounded-full" src={review1} width="96" height="96" alt="Testimonial 01" />
                                </div>
                                <blockquote className="text-xl font-medium mb-4">
                                    “ Could be not easier to use, and our multiple websites are wonderful. “
                                </blockquote>
                                <cite className="block font-bold text-lg not-italic mb-1">Shayam</cite>
                            </div>
                        </div>
                        <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                            {/* Testimonial */}
                            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                    <img className="relative rounded-full" src={review1} width="96" height="96" alt="Testimonial 01" />
                                </div>
                                <blockquote className="text-xl font-medium mb-4">
                                    “ We get nice comments all the time. “
                                </blockquote>
                                <cite className="block font-bold text-lg not-italic mb-1">Balram</cite>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Reviews
