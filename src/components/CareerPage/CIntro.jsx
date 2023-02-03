import React from 'react'

function CIntro() {
    return (
        <div className="flex flex-col mx-[20%] mt-20 mb-[7rem] justify-center space-y-3 lg:space-y-6 pt-4 text-center md:px-6 lg:mt-[0] lg:pt-[11rem] lg:mb-[0] lg:pb-[14.5rem] bg-[#F5EDCE]">
            <h1 className="text-2xl lg:text-4xl text-[#1A0000]">
                About Us
            </h1>
            <p class="mb-3 font-light text-gray-500 dark:text-black">At TripNThrill, we're dedicated to providing the best possible travel experiences for our customers. We believe that travel should be more than just a vacation; it should be an adventure. That's why we're committed to creating unique and personalized trips that allow our customers to truly explore the world.</p>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <p class="mb-3 font-light text-gray-500 dark:text-black border-4 border-black rounded">We offer a variety of career opportunities, including roles in:
                    <ul>
                        <li className="m-0 p-0">Sales and Marketing</li>
                        <li className="m-0 p-0">Tour Planning and Operations</li>
                        <li className="m-0 p-0">Customer Service</li>
                        <li className="m-0 p-0">Travel Writing and Blogging</li>
                    </ul>
                </p>
                <p class="mb-3 font-light text-gray-500 dark:text-black border-4 border-black rounded">Our team members have a passion for travel, and a desire to help others experience the world in new and exciting ways. If you share our values and are looking for a dynamic and rewarding career, we want to hear from you!</p>
                <p class="mb-3 font-light text-gray-500 dark:text-black border-4 border-black rounded">We offer competitive salaries, benefits, and opportunities for growth and advancement within the company. We also provide training and support to help our team members succeed in their roles.</p>
            </div>
            <p class="mb-3 font-light text-gray-500 dark:text-black">To apply for a position at TripNThrill, please send your resume and a cover letter to "support@tripnthrill.com". Be sure to include the position you're applying for in the subject line.</p>
            <p class="mb-3 font-light text-gray-500 dark:text-black">Thank you for considering TripNThrill as your next career move. We look forward to hearing from you!</p>
        </div>
    )
}

export default CIntro;
