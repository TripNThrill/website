import React from 'react'
import { FaBriefcase, FaRoute, FaDollarSign, FaHeadset } from 'react-icons/fa'

const features = [
    {
        name: 'Experienced and Professional Team',
        description:
            'Our team is made up of experienced travel agents and planners who are passionate about what they do. They have the knowledge and expertise to plan the perfect trip for you, whether you\'re looking for a romantic getaway, an action-packed adventure, or a family vacation.',
        icon: FaBriefcase,
    },
    {
        name: 'Personalized and Customizable Trips',
        description:
            'We understand that every traveler is unique, which is why we offer personalized and customizable trips. We\'ll work with you to create an itinerary that is tailored to your interests and preferences.',
        icon: FaRoute,
    },
    {
        name: 'Competitive Pricing',
        description:
            'We believe that everyone should have the opportunity to experience the world, which is why we offer competitive pricing on all of our trips. We work with a wide range of suppliers to get the best deals, so you can be sure you\'re getting the best value for your money.',
        icon: FaDollarSign,
    },
    {
        name: '24/7 Support',
        description:
            'We know that things can go wrong while you\'re traveling, which is why we offer 24/7 support to all of our customers. No matter what time of day or night, you can reach out to us and we\'ll be there to help.',
        icon: FaHeadset,
    },
]

function WhyUs() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Why Us ?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Choose TripNThrill for Your Next Adventure?
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At TripNThrill, we believe that travel should be more than just a vacation; it should be an adventure. Our team is dedicated to creating unique and personalized trips that allow our customers to truly explore the world. Here are just a few of the reasons why you should choose us for your next adventure
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <div className='max-w-screen-lg mx-auto px-3 py-16' >
                <div className="mb-12 text-center">
                    <h2 className="text-4xl text-gray-900 font-bold">aklksjfnsl fj</h2>
                    <div className="mt-4 text-xl md:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam culpa obcaecati iusto cumque ratione impedit nihil adipisci. Commodi minima molestias assumenda consequatur repudiandae sunt eveniet aut eligendi necessitatibus at!lorem10
                    </div>
                </div>
            </div>

            <div className='mt-20 flex flex-wrap items-center'>
                <div className="w-full sm:w-1/2 text-center sm:px-6">
                    {/* <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3> */}
                    {/* <div className="mt-6 text-xl leading-9">{props.description}</div> */}
                </div>

                <div className="w-full sm:w-1/2 p-6">
                    {/* <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} /> */}
                </div>
            </div>
        </div>
    )
}

export default WhyUs
