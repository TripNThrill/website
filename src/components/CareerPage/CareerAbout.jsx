import { FaAngleDoubleRight } from 'react-icons/fa';
import careerImg from '../../assets/careers.jpg';

const features = [
    {
        description:
            'Sales and Marketing',
        icon: FaAngleDoubleRight,
    },
    {
        description: 'Tour Planning and Operations',
        icon: FaAngleDoubleRight,
    },
    {
        description: 'Customer Service',
        icon: FaAngleDoubleRight,
    },
    {
        description: 'Travel Writing and Blogging',
        icon: FaAngleDoubleRight,
    },
]

export default function CareerAbout() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">At TripNThrill, we're dedicated to providing the best possible travel experiences for our customers. We believe that travel should be more than just a vacation; it should be an adventure. That's why we're committed to creating unique and personalized trips that allow our customers to truly explore the world.</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">We offer a variety of career opportunities, including roles in</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src={careerImg}
                        alt="Product screenshot"
                        className="w-full md:h-[90vh] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    // width={2432}
                    // height={1442}
                    />
                </div>
            </div>
        </div>
    )
}
