import React from 'react'
import { FaHeadset, FaDollarSign, FaNewspaper, FaBug } from 'react-icons/fa'

function OpreatorContact() {
    return (
        <div className="bg-gray-300 text-gray-100 px-8 py-12">
            <div
                className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                    </div>
                    <div className="mt-8 text-center">
                        <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                            <div class="grid grid-cols-1">
                                <div class="mb-6 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div class="flex items-start">
                                        <div class="shrink-0">
                                            <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <FaHeadset />
                                            </div>
                                        </div>
                                        <div class="grow ml-6">
                                            <p class="font-bold mb-1">Technical support</p>
                                            <p class="text-gray-500">support@tripnthrill.com</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="mb-6 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div class="flex items-start">
                                        <div class="shrink-0">
                                            <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <FaDollarSign />
                                            </div>
                                        </div>
                                        <div class="grow ml-6">
                                            <p class="font-bold mb-1">Sales questions</p>
                                            <p class="text-gray-500">sales@tripnthrill.com</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="mb-6 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div class="flex align-start">
                                        <div class="shrink-0">
                                            <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <FaNewspaper />
                                            </div>
                                        </div>
                                        <div class="grow ml-6">
                                            <p class="font-bold mb-1">Press</p>
                                            <p class="text-gray-500">press@tripnthrill.com</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div class="flex align-start">
                                        <div class="shrink-0">
                                            <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <FaBug />
                                            </div>
                                        </div>
                                        <div class="grow ml-6">
                                            <p class="font-bold mb-1">Bug report</p>
                                            <p class="text-gray-500">bugs@tripnthrill.com</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpreatorContact
