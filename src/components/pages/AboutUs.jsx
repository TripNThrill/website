import React from 'react'
import appDesign from '../../assets/appDesign.png'
import travel from '../../assets/travelempty.jpg'
import sumukh from '../../assets/sumukh.png'
import aman from '../../assets/aman.jpg'
import avatar1 from '../../assets/avatar/myAvatar.png'
import a2 from '../../assets/avatar/a2.png'
import a3 from '../../assets/avatar/a3.png'
import a4 from '../../assets/avatar/a4.png'
import a5 from '../../assets/avatar/a5.png'
import a6 from '../../assets/avatar/a6.png'
import a7 from '../../assets/avatar/a7.png'
import a8 from '../../assets/avatar/a8.png'


function AboutUs() {
    return (
        <div>
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${travel})`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-80 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Your TRIP starts with us.
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        We are a team of travel enthusiasts who are passionate about exploring the world and helping others do the same. We have a wealth of experience in the travel industry and have curated a wide range of trips that cater to all types of travelers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Trusted Agency</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            At TripNThrill, we provide exceptional travel experiences for over many years. Our mission is to provide our customers with high-quality, immersive travel experiences that allow them to truly discover and connect with the places they visit.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Offers
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            We offer a wide range of tours, from exotic and adventurous destinations to more relaxed and scenic getaways. Our experienced and knowledgeable tour guides are dedicated to ensuring that each and every one of our customers has a trip of a lifetime.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Why Us ?
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Our team of experienced travel professionals is dedicated to providing the highest level of customer service and attention to detail. From the moment you start planning your trip until the time you return home, we are here to help you every step of the way.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Why Travelling with us is a pleasure
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Our trips are designed to be an authentic and immersive experience, giving you the opportunity to truly connect with the culture, people, and landscapes of the destinations we visit. Whether you're a solo traveler, a couple, or a family, we have something for everyone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full sm:max-w-1/2 rounded-3xl shadow-lg"
                                    src={appDesign}
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                        <i className="fas fa-rocket text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        A growing company
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea, temporibus eaque enim obcaecati placeat alias quasi similique pariatur! Sunt.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="fas fa-fingerprint"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">
                                                        Carefully crafted
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="fab fa-html5"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">Amazing destinations</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="far fa-paper-plane"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">Dynamic packeges</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4 flex flex-col ">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full px-4">
                                <h2 className="text-4xl font-semibold">
                                    Here is our Team
                                </h2>
                                <p className="text-lg leading-relaxed m-4 text-gray-600">
                                    "At TripNThrill, our team is dedicated to making your travel experience the best it can be. From the moment you start planning your trip to the moment you return home, our team is here to provide you with exceptional service and unforgettable memories."
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={sumukh}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Sumukh YR
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            FOUNDER AND CEO
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={a6}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Sampreeth
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Business & Marketing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={a7}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Shubhendu
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            App Developer
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={a8}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Vaibhav
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Frontend Developer
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={aman}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Aman Verma
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Frontend Developer
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={avatar1}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Suhas
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Business and Admin
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={a2}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Ketan
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Web Developer
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={a3}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Rahul
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Testing
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={a4}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Tanmay
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            UI/UX
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={a5}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Vishwas
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Content Writing
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={a6}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Neema
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Backend
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AboutUs;
